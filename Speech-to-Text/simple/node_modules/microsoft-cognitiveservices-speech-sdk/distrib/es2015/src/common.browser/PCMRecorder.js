// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { RiffPcmEncoder } from "../common/Exports";
export class PcmRecorder {
    constructor() {
        this.record = (context, mediaStream, outputStream) => {
            const desiredSampleRate = 16000;
            const scriptNode = (() => {
                let bufferSize = 0;
                try {
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
                catch (error) {
                    // Webkit (<= version 31) requires a valid bufferSize.
                    bufferSize = 2048;
                    let audioSampleRate = context.sampleRate;
                    while (bufferSize < 16384 && audioSampleRate >= (2 * desiredSampleRate)) {
                        bufferSize <<= 1;
                        audioSampleRate >>= 1;
                    }
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
            })();
            const waveStreamEncoder = new RiffPcmEncoder(context.sampleRate, desiredSampleRate);
            let needHeader = true;
            const that = this;
            scriptNode.onaudioprocess = (event) => {
                const inputFrame = event.inputBuffer.getChannelData(0);
                if (outputStream && !outputStream.isClosed) {
                    const waveFrame = waveStreamEncoder.encode(inputFrame);
                    if (!!waveFrame) {
                        outputStream.writeStreamChunk({
                            buffer: waveFrame,
                            isEnd: false,
                            timeReceived: Date.now(),
                        });
                        needHeader = false;
                    }
                }
            };
            const micInput = context.createMediaStreamSource(mediaStream);
            // https://webaudio.github.io/web-audio-api/#audioworklet
            // Using AudioWorklet to improve audio quality and avoid audio glitches due to blocking the UI thread
            if (!!this.privSpeechProcessorScript && !!context.audioWorklet) {
                context.audioWorklet
                    .addModule(this.privSpeechProcessorScript)
                    .then(() => {
                    const workletNode = new AudioWorkletNode(context, "speech-processor");
                    workletNode.port.onmessage = (ev) => {
                        const inputFrame = ev.data;
                        if (outputStream && !outputStream.isClosed) {
                            const waveFrame = waveStreamEncoder.encode(inputFrame);
                            if (!!waveFrame) {
                                outputStream.writeStreamChunk({
                                    buffer: waveFrame,
                                    isEnd: false,
                                    timeReceived: Date.now(),
                                });
                                needHeader = false;
                            }
                        }
                    };
                    micInput.connect(workletNode);
                    workletNode.connect(context.destination);
                    this.privMediaResources = {
                        scriptProcessorNode: workletNode,
                        source: micInput,
                        stream: mediaStream,
                    };
                })
                    .catch(() => {
                    micInput.connect(scriptNode);
                    scriptNode.connect(context.destination);
                    this.privMediaResources = {
                        scriptProcessorNode: scriptNode,
                        source: micInput,
                        stream: mediaStream,
                    };
                });
            }
            else {
                micInput.connect(scriptNode);
                scriptNode.connect(context.destination);
                this.privMediaResources = {
                    scriptProcessorNode: scriptNode,
                    source: micInput,
                    stream: mediaStream,
                };
            }
        };
        this.releaseMediaResources = (context) => {
            if (this.privMediaResources) {
                if (this.privMediaResources.scriptProcessorNode) {
                    this.privMediaResources.scriptProcessorNode.disconnect(context.destination);
                    this.privMediaResources.scriptProcessorNode = null;
                }
                if (this.privMediaResources.source) {
                    this.privMediaResources.source.disconnect();
                    this.privMediaResources.stream.getTracks().forEach((track) => track.stop());
                    this.privMediaResources.source = null;
                }
            }
        };
    }
    setWorkletUrl(url) {
        this.privSpeechProcessorScript = url;
    }
}

//# sourceMappingURL=PCMRecorder.js.map
