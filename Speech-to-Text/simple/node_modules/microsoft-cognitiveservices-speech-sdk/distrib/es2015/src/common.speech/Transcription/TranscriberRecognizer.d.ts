import { AudioConfig, CancellationEventArgs, Conversation, ConversationInfo, ConversationTranscriber, PropertyCollection, Recognizer, SpeechRecognitionEventArgs, SpeechTranslationConfig } from "../../sdk/Exports";
import { IAuthentication, IConnectionFactory, RecognizerConfig, ServiceRecognizerBase, SpeechServiceConfig } from "../Exports";
export declare class TranscriberRecognizer extends Recognizer {
    private privDisposedRecognizer;
    private privConversation;
    /**
     * TranscriberRecognizer constructor.
     * @constructor
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    constructor(speechTranslationConfig: SpeechTranslationConfig, audioConfig?: AudioConfig);
    recognizing: (sender: Recognizer, event: SpeechRecognitionEventArgs) => void;
    recognized: (sender: Recognizer, event: SpeechRecognitionEventArgs) => void;
    canceled: (sender: Recognizer, event: CancellationEventArgs) => void;
    getConversationInfo(): ConversationInfo;
    get authorizationToken(): string;
    set authorizationToken(token: string);
    set conversation(c: Conversation);
    get speechRecognitionLanguage(): string;
    get properties(): PropertyCollection;
    startContinuousRecognitionAsync(cb?: () => void, err?: (e: string) => void): void;
    stopContinuousRecognitionAsync(cb?: () => void, err?: (e: string) => void): void;
    close(): Promise<void>;
    pushConversationEvent(conversationInfo: ConversationInfo, command: string): Promise<void>;
    connectCallbacks(transcriber: ConversationTranscriber): void;
    disconnectCallbacks(): void;
    /**
     * Disposes any resources held by the object.
     * @member ConversationTranscriber.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - true if disposing the object.
     */
    protected dispose(disposing: boolean): Promise<void>;
    protected createRecognizerConfig(speechConfig: SpeechServiceConfig): RecognizerConfig;
    protected createServiceRecognizer(authentication: IAuthentication, connectionFactory: IConnectionFactory, audioConfig: AudioConfig, recognizerConfig: RecognizerConfig): ServiceRecognizerBase;
}
