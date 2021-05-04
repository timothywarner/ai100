import { CancellationDetailsBase, PropertyCollection, ResultReason } from "./Exports";
export interface IEnrollmentResultDetails {
    enrollmentsCount: number;
    enrollmentsLength: number;
    enrollmentsSpeechLength: number;
    remainingEnrollmentsCount: number;
    remainingEnrollmentsSpeechLength: number;
    audioLength: number;
    audioSpeechLength: number;
    enrollmentStatus: string;
}
/**
 * Output format
 * @class VoiceProfileEnrollmentResult
 */
export declare class VoiceProfileEnrollmentResult {
    private privReason;
    private privDetails;
    private privProperties;
    private privErrorDetails;
    constructor(reason: ResultReason, json: string, statusText: string);
    get reason(): ResultReason;
    get enrollmentsCount(): number;
    get enrollmentsLength(): number;
    get properties(): PropertyCollection;
    get enrollmentResultDetails(): IEnrollmentResultDetails;
    get errorDetails(): string;
}
/**
 * @class VoiceProfileEnrollmentCancellationDetails
 */
export declare class VoiceProfileEnrollmentCancellationDetails extends CancellationDetailsBase {
    private constructor();
    /**
     * Creates an instance of VoiceProfileEnrollmentCancellationDetails object for the canceled VoiceProfileEnrollmentResult.
     * @member VoiceProfileEnrollmentCancellationDetails.fromResult
     * @function
     * @public
     * @param {VoiceProfileEnrollmentResult} result - The result that was canceled.
     * @returns {VoiceProfileEnrollmentCancellationDetails} The cancellation details object being created.
     */
    static fromResult(result: VoiceProfileEnrollmentResult): VoiceProfileEnrollmentCancellationDetails;
}
