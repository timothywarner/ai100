// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { CancellationErrorCode, CancellationReason, ResultReason } from "../sdk/Exports";
import { RecognitionStatus } from "./Exports";
export class EnumTranslation {
    static implTranslateRecognitionResult(recognitionStatus) {
        let reason = ResultReason.Canceled;
        switch (recognitionStatus) {
            case RecognitionStatus.Success:
                reason = ResultReason.RecognizedSpeech;
                break;
            case RecognitionStatus.NoMatch:
            case RecognitionStatus.InitialSilenceTimeout:
            case RecognitionStatus.BabbleTimeout:
            case RecognitionStatus.EndOfDictation:
                reason = ResultReason.NoMatch;
                break;
            case RecognitionStatus.Error:
            default:
                reason = ResultReason.Canceled;
                break;
        }
        return reason;
    }
    static implTranslateCancelResult(recognitionStatus) {
        let reason = CancellationReason.EndOfStream;
        switch (recognitionStatus) {
            case RecognitionStatus.Success:
            case RecognitionStatus.EndOfDictation:
            case RecognitionStatus.NoMatch:
                reason = CancellationReason.EndOfStream;
                break;
            case RecognitionStatus.InitialSilenceTimeout:
            case RecognitionStatus.BabbleTimeout:
            case RecognitionStatus.Error:
            default:
                reason = CancellationReason.Error;
                break;
        }
        return reason;
    }
    static implTranslateCancelErrorCode(recognitionStatus) {
        let reason = CancellationErrorCode.NoError;
        switch (recognitionStatus) {
            case RecognitionStatus.Error:
                reason = CancellationErrorCode.ServiceError;
                break;
            case RecognitionStatus.TooManyRequests:
                reason = CancellationErrorCode.TooManyRequests;
                break;
            default:
                reason = CancellationErrorCode.NoError;
                break;
        }
        return reason;
    }
}

//# sourceMappingURL=EnumTranslation.js.map
