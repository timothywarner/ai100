// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export class ParticipantsListPayloadResponse {
    constructor(json) {
        this.privParticipantsPayloadResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new ParticipantsListPayloadResponse(json);
    }
    get roomid() {
        return this.privParticipantsPayloadResponse.roomid;
    }
    get id() {
        return this.privParticipantsPayloadResponse.id;
    }
    get command() {
        return this.privParticipantsPayloadResponse.command;
    }
    get participants() {
        return this.privParticipantsPayloadResponse.participants;
    }
    get token() {
        return this.privParticipantsPayloadResponse.token;
    }
    get translateTo() {
        return this.privParticipantsPayloadResponse.translateTo;
    }
    get profanityFilter() {
        return this.privParticipantsPayloadResponse.profanityFilter;
    }
    get roomProfanityFilter() {
        return this.privParticipantsPayloadResponse.roomProfanityFilter;
    }
    get roomLocked() {
        return this.privParticipantsPayloadResponse.roomLocked;
    }
    get muteAll() {
        return this.privParticipantsPayloadResponse.muteAll;
    }
    get type() {
        return this.privParticipantsPayloadResponse.type;
    }
}
// tslint:disable-next-line: max-classes-per-file
export class ParticipantPayloadResponse {
    constructor(json) {
        this.privParticipantPayloadResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new ParticipantPayloadResponse(json);
    }
    get nickname() {
        return this.privParticipantPayloadResponse.nickname;
    }
    get locale() {
        return this.privParticipantPayloadResponse.locale;
    }
    get usetts() {
        return this.privParticipantPayloadResponse.usetts;
    }
    get ismuted() {
        return this.privParticipantPayloadResponse.ismuted;
    }
    get ishost() {
        return this.privParticipantPayloadResponse.ishost;
    }
    get participantId() {
        return this.privParticipantPayloadResponse.participantId;
    }
    get avatar() {
        return this.privParticipantPayloadResponse.avatar;
    }
}

//# sourceMappingURL=ParticipantResponsePayload.js.map
