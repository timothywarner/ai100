import { ITranslations, RecognitionStatus } from "../Exports";
export interface ITranslationPhrase {
    RecognitionStatus: RecognitionStatus;
    Offset: number;
    Duration: number;
    Text: string;
    Translation: ITranslations;
}
export declare class TranslationPhrase implements ITranslationPhrase {
    private privTranslationPhrase;
    private constructor();
    static fromJSON(json: string): TranslationPhrase;
    get RecognitionStatus(): RecognitionStatus;
    get Offset(): number;
    get Duration(): number;
    get Text(): string;
    get Translation(): ITranslations;
}
