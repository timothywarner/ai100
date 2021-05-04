// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { CancellationErrorCodePropertyName } from "../common.speech/Exports";
import { Contracts } from "./Contracts";
import { CancellationDetailsBase, CancellationErrorCode, CancellationReason, PropertyCollection, ResultReason, } from "./Exports";
/**
 * Output format
 * @class VoiceProfileEnrollmentResult
 */
export class VoiceProfileEnrollmentResult {
    constructor(reason, json, statusText) {
        this.privReason = reason;
        this.privProperties = new PropertyCollection();
        if (this.privReason !== ResultReason.Canceled) {
            this.privDetails = JSON.parse(json);
            Contracts.throwIfNullOrUndefined(json, "JSON");
            if (this.privDetails.enrollmentStatus.toLowerCase() === "enrolling") {
                this.privReason = ResultReason.EnrollingVoiceProfile;
            }
        }
        else {
            this.privErrorDetails = statusText;
            this.privProperties.setProperty(CancellationErrorCodePropertyName, CancellationErrorCode[CancellationErrorCode.ServiceError]);
        }
    }
    get reason() {
        return this.privReason;
    }
    get enrollmentsCount() {
        return this.privDetails.enrollmentsCount;
    }
    get enrollmentsLength() {
        return this.privDetails.enrollmentsLength;
    }
    get properties() {
        return this.privProperties;
    }
    get enrollmentResultDetails() {
        return this.privDetails;
    }
    get errorDetails() {
        return this.privErrorDetails;
    }
}
/**
 * @class VoiceProfileEnrollmentCancellationDetails
 */
// tslint:disable-next-line:max-classes-per-file
export class VoiceProfileEnrollmentCancellationDetails extends CancellationDetailsBase {
    constructor(reason, errorDetails, errorCode) {
        super(reason, errorDetails, errorCode);
    }
    /**
     * Creates an instance of VoiceProfileEnrollmentCancellationDetails object for the canceled VoiceProfileEnrollmentResult.
     * @member VoiceProfileEnrollmentCancellationDetails.fromResult
     * @function
     * @public
     * @param {VoiceProfileEnrollmentResult} result - The result that was canceled.
     * @returns {VoiceProfileEnrollmentCancellationDetails} The cancellation details object being created.
     */
    static fromResult(result) {
        const reason = CancellationReason.Error;
        let errorCode = CancellationErrorCode.NoError;
        if (!!result.properties) {
            errorCode = CancellationErrorCode[result.properties.getProperty(CancellationErrorCodePropertyName, CancellationErrorCode[CancellationErrorCode.NoError])];
        }
        return new VoiceProfileEnrollmentCancellationDetails(reason, result.errorDetails, errorCode);
    }
}

//# sourceMappingURL=VoiceProfileEnrollmentResult.js.map
