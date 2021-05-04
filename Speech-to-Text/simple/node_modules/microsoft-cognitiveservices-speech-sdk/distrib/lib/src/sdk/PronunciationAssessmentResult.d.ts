import { RecognitionResult } from "./Exports";
/**
 * Pronunciation assessment results.
 * @class PronunciationAssessmentResult
 * Added in version 1.15.0.
 */
export declare class PronunciationAssessmentResult {
    private privPronJson;
    private constructor();
    /**
     * @member PronunciationAssessmentResult.fromResult
     * @function
     * @public
     * @param {RecognitionResult} result The recognition result.
     * @return {PronunciationAssessmentConfig} Instance of PronunciationAssessmentConfig
     * @summary Creates an instance of the PronunciationAssessmentResult from recognition result.
     */
    static fromResult(result: RecognitionResult): PronunciationAssessmentResult;
    /**
     * Gets the detail result of pronunciation assessment.
     * @member PronunciationAssessmentConfig.prototype.detailResult
     * @function
     * @public
     * @returns {any} detail result.
     */
    get detailResult(): any;
    /**
     * The score indicating the pronunciation accuracy of the given speech, which indicates
     * how closely the phonemes match a native speaker's pronunciation.
     * @member PronunciationAssessmentResult.prototype.accuracyScore
     * @function
     * @public
     * @returns {number} Accuracy score.
     */
    get accuracyScore(): number;
    /**
     * The overall score indicating the pronunciation quality of the given speech.
     * This is calculated from AccuracyScore, FluencyScore and CompletenessScore with weight.
     * @member PronunciationAssessmentResult.prototype.pronunciationScore
     * @function
     * @public
     * @returns {number} Pronunciation score.
     */
    get pronunciationScore(): number;
    /**
     * The score indicating the completeness of the given speech by calculating the ratio of pronounced words towards entire input.
     * @member PronunciationAssessmentResult.prototype.completenessScore
     * @function
     * @public
     * @returns {number} Completeness score.
     */
    get completenessScore(): number;
    /**
     * The score indicating the fluency of the given speech.
     * @member PronunciationAssessmentResult.prototype.fluencyScore
     * @function
     * @public
     * @returns {number} Fluency score.
     */
    get fluencyScore(): number;
}
