import { IPrimaryLanguage, RecognitionStatus } from "../Exports";
export interface IDetailedSpeechPhrase {
    RecognitionStatus: RecognitionStatus;
    NBest: IPhrase[];
    Duration?: number;
    Offset?: number;
    PrimaryLanguage?: IPrimaryLanguage;
}
export interface IPhrase {
    Confidence?: number;
    Lexical: string;
    ITN: string;
    MaskedITN: string;
    Display: string;
}
export declare class DetailedSpeechPhrase implements IDetailedSpeechPhrase {
    private privDetailedSpeechPhrase;
    private constructor();
    static fromJSON(json: string): DetailedSpeechPhrase;
    get RecognitionStatus(): RecognitionStatus;
    get NBest(): IPhrase[];
    get Duration(): number;
    get Offset(): number;
    get Language(): string;
    get LanguageDetectionConfidence(): string;
}
