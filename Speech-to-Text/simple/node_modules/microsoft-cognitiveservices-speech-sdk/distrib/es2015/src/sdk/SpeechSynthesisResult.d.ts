import { PropertyCollection, ResultReason } from "./Exports";
/**
 * Defines result of speech synthesis.
 * @class SpeechSynthesisResult
 * Added in version 1.11.0
 */
export declare class SpeechSynthesisResult {
    private privResultId;
    private privReason;
    private privAudioData;
    private privErrorDetails;
    private privProperties;
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {number} audioData - The offset into the stream.
     * @param {string} errorDetails - Error details, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    constructor(resultId?: string, reason?: ResultReason, audioData?: ArrayBuffer, errorDetails?: string, properties?: PropertyCollection);
    /**
     * Specifies the result identifier.
     * @member SpeechSynthesisResult.prototype.resultId
     * @function
     * @public
     * @returns {string} Specifies the result identifier.
     */
    get resultId(): string;
    /**
     * Specifies status of the result.
     * @member SpeechSynthesisResult.prototype.reason
     * @function
     * @public
     * @returns {ResultReason} Specifies status of the result.
     */
    get reason(): ResultReason;
    /**
     * The synthesized audio data
     * @member SpeechSynthesisResult.prototype.audioData
     * @function
     * @public
     * @returns {ArrayBuffer} The synthesized audio data.
     */
    get audioData(): ArrayBuffer;
    /**
     * In case of an unsuccessful synthesis, provides details of the occurred error.
     * @member SpeechSynthesisResult.prototype.errorDetails
     * @function
     * @public
     * @returns {string} a brief description of an error.
     */
    get errorDetails(): string;
    /**
     *  The set of properties exposed in the result.
     * @member SpeechSynthesisResult.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The set of properties exposed in the result.
     */
    get properties(): PropertyCollection;
}
