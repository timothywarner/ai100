/**
 * Placeholder class for the Conversation Request Session. Based off RequestSession.
 * TODO: define what telemetry is required.
 */
export declare class ConversationRequestSession {
    private privIsDisposed;
    private privDetachables;
    private privRequestId;
    private privRequestCompletionDeferral;
    private privSessionId;
    constructor(sessionId: string);
    get sessionId(): string;
    get requestId(): string;
    get completionPromise(): Promise<void>;
    onPreConnectionStart: (authFetchEventId: string, connectionId: string) => void;
    onAuthCompleted: (isError: boolean, error?: string) => void;
    onConnectionEstablishCompleted: (statusCode: number, reason?: string) => void;
    onServiceTurnEndResponse: (continuousRecognition: boolean) => void;
    dispose(error?: string): Promise<void>;
    private onComplete;
}
