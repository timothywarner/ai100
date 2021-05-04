import { AudioConfig, CancellationEventArgs, ConversationTranscriptionEventArgs, PropertyCollection, SessionEventArgs } from "../Exports";
import { ConversationHandler, ConversationTranscriptionHandler } from "./Exports";
import { Callback, IConversation } from "./IConversation";
export declare class ConversationTranscriber implements ConversationTranscriptionHandler {
    private privDisposedRecognizer;
    private privRecognizer;
    private privProperties;
    protected privAudioConfig: AudioConfig;
    /**
     * ConversationTranscriber constructor.
     * @constructor
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    constructor(audioConfig?: AudioConfig);
    /**
     * The event canceled signals that an error occurred during transcription.
     * @member ConversationTranscriber.prototype.canceled
     * @function
     * @public
     */
    canceled: (sender: ConversationHandler, event: CancellationEventArgs) => void;
    /**
     * @param {Conversation} converation - conversation to be recognized
     */
    joinConversationAsync(conversation: IConversation, cb?: Callback, err?: Callback): void;
    /**
     * The event recognized signals that a final conversation transcription result is received.
     * @member ConversationTranscriber.prototype.transcribed
     * @function
     * @public
     */
    transcribed: (sender: ConversationTranscriptionHandler, event: ConversationTranscriptionEventArgs) => void;
    /**
     * The event recognizing signals that an intermediate conversation transcription result is received.
     * @member ConversationTranscriber.prototype.transcribing
     * @function
     * @public
     */
    transcribing: (sender: ConversationTranscriptionHandler, event: ConversationTranscriptionEventArgs) => void;
    /**
     * Defines event handler for session started events.
     * @member ConversationTranscriber.prototype.sessionStarted
     * @function
     * @public
     */
    sessionStarted: (sender: ConversationHandler, event: SessionEventArgs) => void;
    /**
     * Defines event handler for session stopped events.
     * @member ConversationTranscriber.prototype.sessionStopped
     * @function
     * @public
     */
    sessionStopped: (sender: ConversationHandler, event: SessionEventArgs) => void;
    /**
     * Gets the authorization token used to communicate with the service.
     * @member ConversationTranscriber.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken(): string;
    /**
     * Gets/Sets the authorization token used to communicate with the service.
     * @member ConversationTranscriber.prototype.authorizationToken
     * @function
     * @public
     * @param {string} token - Authorization token.
     */
    set authorizationToken(token: string);
    /**
     * Gets the spoken language of recognition.
     * @member ConversationTranscriber.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @returns {string} The spoken language of recognition.
     */
    get speechRecognitionLanguage(): string;
    /**
     * The collection of properties and their values defined for this ConversationTranscriber.
     * @member ConversationTranscriber.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their values defined for this ConversationTranscriber.
     */
    get properties(): PropertyCollection;
    /**
     * Starts conversation transcription, until stopTranscribingAsync() is called.
     * User must subscribe to events to receive transcription results.
     * @member ConversationTranscriber.prototype.startTranscribingAsync
     * @function
     * @public
     * @param cb - Callback invoked once the transcription has started.
     * @param err - Callback invoked in case of an error.
     */
    startTranscribingAsync(cb?: Callback, err?: Callback): void;
    /**
     * Starts conversation transcription, until stopTranscribingAsync() is called.
     * User must subscribe to events to receive transcription results.
     * @member ConversationTranscriber.prototype.stopTranscribingAsync
     * @function
     * @public
     * @param cb - Callback invoked once the transcription has started.
     * @param err - Callback invoked in case of an error.
     */
    stopTranscribingAsync(cb?: Callback, err?: Callback): void;
    /**
     * Leave the current conversation. After this is called, you will no longer receive any events.
     */
    leaveConversationAsync(cb?: Callback, err?: Callback): void;
    /**
     * closes all external resources held by an instance of this class.
     * @member ConversationTranscriber.prototype.close
     * @function
     * @public
     */
    close(cb?: () => void, errorCb?: (error: string) => void): void;
    /**
     * Disposes any resources held by the object.
     * @member ConversationTranscriber.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - true if disposing the object.
     */
    protected dispose(disposing: boolean): Promise<void>;
}
