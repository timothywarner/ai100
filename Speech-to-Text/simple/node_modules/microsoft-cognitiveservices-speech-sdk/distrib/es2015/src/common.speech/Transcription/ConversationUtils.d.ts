import { IRequestOptions } from "../../common.browser/RestConfigBase";
import { Callback } from "../../sdk/Transcription/IConversation";
export declare function extractHeaderValue(headerKey: string, headers: string): string;
export declare function request(method: "get" | "post" | "delete", url: string, queryParams: any, body: any, options: IRequestOptions, callback: any): any;
export declare function PromiseToEmptyCallback<T>(promise: Promise<T>, cb?: Callback, err?: Callback): void;
