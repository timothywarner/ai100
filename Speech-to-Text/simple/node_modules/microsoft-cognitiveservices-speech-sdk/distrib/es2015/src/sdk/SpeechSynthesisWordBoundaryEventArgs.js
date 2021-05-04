// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * Defines contents of speech synthesis word boundary event.
 * @class SpeechSynthesisWordBoundaryEventArgs
 * Added in version 1.11.0
 */
export class SpeechSynthesisWordBoundaryEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {number} audioOffset - The audio offset.
     * @param {string} text - The text.
     * @param {number} wordLength - The length of the word.
     * @param {number} textOffset - The text offset.
     */
    constructor(audioOffset, text, wordLength, textOffset) {
        this.privAudioOffset = audioOffset;
        this.privText = text;
        this.privWordLength = wordLength;
        this.privTextOffset = textOffset;
    }
    /**
     * Specifies the audio offset.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.audioOffset
     * @function
     * @public
     * @returns {number} the audio offset.
     */
    get audioOffset() {
        return this.privAudioOffset;
    }
    /**
     * Specifies the text of the word boundary event.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.text
     * @function
     * @public
     * @returns {string} the text.
     */
    get text() {
        return this.privText;
    }
    /**
     * Specifies the word length
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.wordLength
     * @function
     * @public
     * @returns {number} the word length
     */
    get wordLength() {
        return this.privWordLength;
    }
    /**
     * Specifies the text offset.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.textOffset
     * @function
     * @public
     * @returns {number} the text offset.
     */
    get textOffset() {
        return this.privTextOffset;
    }
}

//# sourceMappingURL=SpeechSynthesisWordBoundaryEventArgs.js.map
