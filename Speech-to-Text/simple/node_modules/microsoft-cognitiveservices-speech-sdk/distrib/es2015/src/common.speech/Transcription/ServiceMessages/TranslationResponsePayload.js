// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export class SpeechResponsePayload {
    constructor(json) {
        this.privSpeechResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new SpeechResponsePayload(json);
    }
    get recognition() {
        return this.privSpeechResponse.recognition;
    }
    get translations() {
        return this.privSpeechResponse.translations;
    }
    get id() {
        return this.privSpeechResponse.id;
    }
    get language() {
        return this.privSpeechResponse.language;
    }
    get nickname() {
        return this.privSpeechResponse.nickname;
    }
    get participantId() {
        return this.privSpeechResponse.participantId;
    }
    get roomid() {
        return this.privSpeechResponse.roomid;
    }
    get timestamp() {
        return this.privSpeechResponse.timestamp;
    }
    get type() {
        return this.privSpeechResponse.type;
    }
    get isFinal() {
        return this.privSpeechResponse.type === "final";
    }
}
// tslint:disable-next-line: max-classes-per-file
export class TextResponsePayload {
    constructor(json) {
        this.privTextResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new TextResponsePayload(json);
    }
    get originalText() {
        return this.privTextResponse.originalText;
    }
    get translations() {
        return this.privTextResponse.translations;
    }
    get id() {
        return this.privTextResponse.id;
    }
    get language() {
        return this.privTextResponse.language;
    }
    get nickname() {
        return this.privTextResponse.nickname;
    }
    get participantId() {
        return this.privTextResponse.participantId;
    }
    get roomid() {
        return this.privTextResponse.roomid;
    }
    get timestamp() {
        return this.privTextResponse.timestamp;
    }
    get type() {
        return this.privTextResponse.type;
    }
}

//# sourceMappingURL=TranslationResponsePayload.js.map
