/**
 * Defines the payload for incoming websocket commands
 */
export interface ICommandResponsePayload {
    type: string;
    command?: string;
    id?: string;
    nickname?: string;
    participantId?: string;
    roomid?: string;
    value: boolean | number | string;
}
export declare class CommandResponsePayload implements ICommandResponsePayload {
    private privCommandResponse;
    constructor(json: string);
    static fromJSON(json: string): CommandResponsePayload;
    get type(): string;
    get command(): string;
    get id(): string;
    get nickname(): string;
    get participantId(): string;
    get roomid(): string;
    get value(): boolean | number | string;
}
