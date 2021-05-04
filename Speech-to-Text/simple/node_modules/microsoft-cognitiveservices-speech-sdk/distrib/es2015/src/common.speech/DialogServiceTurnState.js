// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { AudioOutputFormatImpl } from "../sdk/Audio/AudioOutputFormat";
import { AudioOutputStream } from "../sdk/Audio/AudioOutputStream";
import { MessageDataStreamType } from "./ServiceMessages/ActivityResponsePayload";
export class DialogServiceTurnState {
    constructor(manager, requestId) {
        this.privRequestId = requestId;
        this.privIsCompleted = false;
        this.privAudioStream = null;
        this.privTurnManager = manager;
        this.resetTurnEndTimeout();
        // tslint:disable-next-line:no-console
        // console.info("DialogServiceTurnState debugturn start:" + this.privRequestId);
    }
    get audioStream() {
        // Called when is needed to stream.
        this.resetTurnEndTimeout();
        return this.privAudioStream;
    }
    processActivityPayload(payload, audioFormat) {
        if (payload.messageDataStreamType === MessageDataStreamType.TextToSpeechAudio) {
            this.privAudioStream = AudioOutputStream.createPullStream();
            this.privAudioStream.format = (audioFormat !== undefined) ? audioFormat : AudioOutputFormatImpl.getDefaultOutputFormat();
            // tslint:disable-next-line:no-console
            // console.info("Audio start debugturn:" + this.privRequestId);
        }
        return this.privAudioStream;
    }
    endAudioStream() {
        if (this.privAudioStream !== null && !this.privAudioStream.isClosed) {
            this.privAudioStream.close();
        }
    }
    complete() {
        if (this.privTimeoutToken !== undefined) {
            clearTimeout(this.privTimeoutToken);
        }
        this.endAudioStream();
    }
    resetTurnEndTimeout() {
        if (this.privTimeoutToken !== undefined) {
            clearTimeout(this.privTimeoutToken);
        }
        // tslint:disable-next-line:no-console
        // console.info("Timeout reset debugturn:" + this.privRequestId);
        this.privTimeoutToken = setTimeout(() => {
            // tslint:disable-next-line:no-console
            // console.info("Timeout complete debugturn:" + this.privRequestId);
            this.privTurnManager.CompleteTurn(this.privRequestId);
            return;
        }, 2000);
    }
}

//# sourceMappingURL=DialogServiceTurnState.js.map
