/**
 * Defines contents of speech synthesis word boundary event.
 * @class SpeechSynthesisWordBoundaryEventArgs
 * Added in version 1.11.0
 */
export declare class SpeechSynthesisWordBoundaryEventArgs {
    private privAudioOffset;
    private privText;
    private privWordLength;
    private privTextOffset;
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {number} audioOffset - The audio offset.
     * @param {string} text - The text.
     * @param {number} wordLength - The length of the word.
     * @param {number} textOffset - The text offset.
     */
    constructor(audioOffset: number, text: string, wordLength: number, textOffset: number);
    /**
     * Specifies the audio offset.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.audioOffset
     * @function
     * @public
     * @returns {number} the audio offset.
     */
    get audioOffset(): number;
    /**
     * Specifies the text of the word boundary event.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.text
     * @function
     * @public
     * @returns {string} the text.
     */
    get text(): string;
    /**
     * Specifies the word length
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.wordLength
     * @function
     * @public
     * @returns {number} the word length
     */
    get wordLength(): number;
    /**
     * Specifies the text offset.
     * @member SpeechSynthesisWordBoundaryEventArgs.prototype.textOffset
     * @function
     * @public
     * @returns {number} the text offset.
     */
    get textOffset(): number;
}
