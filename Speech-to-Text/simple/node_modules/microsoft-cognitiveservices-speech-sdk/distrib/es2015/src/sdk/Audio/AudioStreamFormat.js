// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * Represents audio stream format used for custom audio input configurations.
 * @class AudioStreamFormat
 */
export class AudioStreamFormat {
    /**
     * Creates an audio stream format object representing the default audio stream
     * format (16KHz 16bit mono PCM).
     * @member AudioStreamFormat.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    static getDefaultInputFormat() {
        return AudioStreamFormatImpl.getDefaultInputFormat();
    }
    /**
     * Creates an audio stream format object with the specified pcm waveformat characteristics.
     * @member AudioStreamFormat.getWaveFormatPCM
     * @function
     * @public
     * @param {number} samplesPerSecond - Sample rate, in samples per second (Hertz).
     * @param {number} bitsPerSample - Bits per sample, typically 16.
     * @param {number} channels - Number of channels in the waveform-audio data. Monaural data
     *        uses one channel and stereo data uses two channels.
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    static getWaveFormatPCM(samplesPerSecond, bitsPerSample, channels) {
        return new AudioStreamFormatImpl(samplesPerSecond, bitsPerSample, channels);
    }
}
/**
 * @private
 * @class AudioStreamFormatImpl
 */
// tslint:disable-next-line:max-classes-per-file
export class AudioStreamFormatImpl extends AudioStreamFormat {
    /**
     * Creates an instance with the given values.
     * @constructor
     * @param {number} samplesPerSec - Samples per second.
     * @param {number} bitsPerSample - Bits per sample.
     * @param {number} channels - Number of channels.
     */
    constructor(samplesPerSec = 16000, bitsPerSample = 16, channels = 1) {
        super();
        this.setString = (view, offset, str) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };
        this.formatTag = 1;
        this.bitsPerSample = bitsPerSample;
        this.samplesPerSec = samplesPerSec;
        this.channels = channels;
        this.avgBytesPerSec = this.samplesPerSec * this.channels * (this.bitsPerSample / 8);
        this.blockAlign = this.channels * Math.max(this.bitsPerSample, 8);
        this.privHeader = new ArrayBuffer(44);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
        const view = new DataView(this.privHeader);
        /* RIFF identifier */
        this.setString(view, 0, "RIFF");
        /* file length */
        view.setUint32(4, 0, true);
        /* RIFF type & Format */
        this.setString(view, 8, "WAVEfmt ");
        /* format chunk length */
        view.setUint32(16, 16, true);
        /* sample format (raw) */
        view.setUint16(20, 1, true);
        /* channel count */
        view.setUint16(22, this.channels, true);
        /* sample rate */
        view.setUint32(24, this.samplesPerSec, true);
        /* byte rate (sample rate * block align) */
        view.setUint32(28, this.avgBytesPerSec, true);
        /* block align (channel count * bytes per sample) */
        view.setUint16(32, this.channels * (this.bitsPerSample / 8), true);
        /* bits per sample */
        view.setUint16(34, this.bitsPerSample, true);
        /* data chunk identifier */
        this.setString(view, 36, "data");
        /* data chunk length */
        view.setUint32(40, 0, true);
    }
    /**
     * Retrieves the default input format.
     * @member AudioStreamFormatImpl.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormatImpl} The default input format.
     */
    static getDefaultInputFormat() {
        return new AudioStreamFormatImpl();
    }
    /**
     * Creates an audio context appropriate to current browser
     * @member AudioStreamFormatImpl.getAudioContext
     * @function
     * @public
     * @returns {AudioContext} An audio context instance
     */
    static getAudioContext(sampleRate) {
        // Workaround for Speech SDK bug in Safari.
        const AudioContext = window.AudioContext // our preferred impl
            || window.webkitAudioContext // fallback, mostly when on Safari
            || false; // could not find.
        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
        if (!!AudioContext) {
            if (sampleRate !== undefined && navigator.mediaDevices.getSupportedConstraints().sampleRate) {
                return new AudioContext({ sampleRate });
            }
            else {
                return new AudioContext();
            }
        }
        else {
            throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
        }
    }
    /**
     * Closes the configuration object.
     * @member AudioStreamFormatImpl.prototype.close
     * @function
     * @public
     */
    close() { return; }
    get header() {
        return this.privHeader;
    }
}

//# sourceMappingURL=AudioStreamFormat.js.map
