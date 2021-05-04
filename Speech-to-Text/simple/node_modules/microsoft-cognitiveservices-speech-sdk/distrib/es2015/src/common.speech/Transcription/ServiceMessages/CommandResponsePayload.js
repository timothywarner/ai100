// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export class CommandResponsePayload {
    constructor(json) {
        this.privCommandResponse = JSON.parse(json);
    }
    static fromJSON(json) {
        return new CommandResponsePayload(json);
    }
    get type() {
        return this.privCommandResponse.type;
    }
    get command() {
        return this.privCommandResponse.command;
    }
    get id() {
        return this.privCommandResponse.id;
    }
    get nickname() {
        return this.privCommandResponse.nickname;
    }
    get participantId() {
        return this.privCommandResponse.participantId;
    }
    get roomid() {
        return this.privCommandResponse.roomid;
    }
    get value() {
        return this.privCommandResponse.value;
    }
}

//# sourceMappingURL=CommandResponsePayload.js.map
