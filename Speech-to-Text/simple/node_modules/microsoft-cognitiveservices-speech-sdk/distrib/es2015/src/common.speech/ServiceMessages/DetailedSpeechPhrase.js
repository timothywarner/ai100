// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { RecognitionStatus } from "../Exports";
export class DetailedSpeechPhrase {
    constructor(json) {
        this.privDetailedSpeechPhrase = JSON.parse(json);
        this.privDetailedSpeechPhrase.RecognitionStatus = RecognitionStatus[this.privDetailedSpeechPhrase.RecognitionStatus];
    }
    static fromJSON(json) {
        return new DetailedSpeechPhrase(json);
    }
    get RecognitionStatus() {
        return this.privDetailedSpeechPhrase.RecognitionStatus;
    }
    get NBest() {
        return this.privDetailedSpeechPhrase.NBest;
    }
    get Duration() {
        return this.privDetailedSpeechPhrase.Duration;
    }
    get Offset() {
        return this.privDetailedSpeechPhrase.Offset;
    }
    get Language() {
        return this.privDetailedSpeechPhrase.PrimaryLanguage === undefined ? undefined : this.privDetailedSpeechPhrase.PrimaryLanguage.Language;
    }
    get LanguageDetectionConfidence() {
        return this.privDetailedSpeechPhrase.PrimaryLanguage === undefined ? undefined : this.privDetailedSpeechPhrase.PrimaryLanguage.Confidence;
    }
}

//# sourceMappingURL=DetailedSpeechPhrase.js.map
