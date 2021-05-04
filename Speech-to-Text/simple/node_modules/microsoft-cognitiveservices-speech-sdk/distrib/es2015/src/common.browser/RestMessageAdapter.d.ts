/// <reference types="node" />
import { IRequestOptions } from "./Exports";
export declare enum RestRequestType {
    Get = "get",
    Post = "post",
    Delete = "delete",
    File = "file"
}
export interface IRestResponse {
    ok: boolean;
    status: number;
    statusText: string;
    data: string;
    json: <T>() => T;
    headers: string;
}
export declare class RestMessageAdapter {
    private privTimeout;
    private privIgnoreCache;
    private privHeaders;
    constructor(configParams: IRequestOptions, connectionId?: string);
    setHeaders(key: string, value: string): void;
    request(method: RestRequestType, uri: string, queryParams?: any, body?: any, binaryBody?: Blob | Buffer): Promise<IRestResponse>;
    private parseXHRResult;
    private errorResponse;
    private withQuery;
    private queryParams;
}
