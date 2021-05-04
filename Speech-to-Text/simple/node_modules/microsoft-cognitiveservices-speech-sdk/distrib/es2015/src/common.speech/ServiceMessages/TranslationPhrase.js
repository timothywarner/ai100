// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { RecognitionStatus } from "../Exports";
import { TranslationStatus } from "../TranslationStatus";
export class TranslationPhrase {
    constructor(json) {
        this.privTranslationPhrase = JSON.parse(json);
        this.privTranslationPhrase.RecognitionStatus = RecognitionStatus[this.privTranslationPhrase.RecognitionStatus];
        if (this.privTranslationPhrase.Translation !== undefined) {
            this.privTranslationPhrase.Translation.TranslationStatus = TranslationStatus[this.privTranslationPhrase.Translation.TranslationStatus];
        }
    }
    static fromJSON(json) {
        return new TranslationPhrase(json);
    }
    get RecognitionStatus() {
        return this.privTranslationPhrase.RecognitionStatus;
    }
    get Offset() {
        return this.privTranslationPhrase.Offset;
    }
    get Duration() {
        return this.privTranslationPhrase.Duration;
    }
    get Text() {
        return this.privTranslationPhrase.Text;
    }
    get Translation() {
        return this.privTranslationPhrase.Translation;
    }
}

//# sourceMappingURL=TranslationPhrase.js.map
