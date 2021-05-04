// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { RestConfigBase } from "../../common.browser/RestConfigBase";
// Node.JS specific xmlhttprequest / browser support.
import * as XHR from "xmlhttprequest-ts";
/**
 * Config settings for Conversation Translator
 */
/**
 * Helpers for sending / receiving HTTPS requests / responses.
 * @param params
 */
function queryParams(params = {}) {
    return Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
}
function withQuery(url, params = {}) {
    const queryString = queryParams(params);
    return queryString ? url + (url.indexOf("?") === -1 ? "?" : "&") + queryString : url;
}
function parseXHRResult(xhr) {
    return {
        data: xhr.responseText,
        headers: xhr.getAllResponseHeaders(),
        json: () => JSON.parse(xhr.responseText),
        ok: xhr.status >= 200 && xhr.status < 300,
        status: xhr.status,
        statusText: xhr.statusText,
    };
}
function errorResponse(xhr, message = null) {
    return {
        data: message || xhr.statusText,
        headers: xhr.getAllResponseHeaders(),
        json: () => JSON.parse(message || ("\"" + xhr.statusText + "\"")),
        ok: false,
        status: xhr.status,
        statusText: xhr.statusText,
    };
}
export function extractHeaderValue(headerKey, headers) {
    let headerValue = "";
    try {
        const arr = headers.trim().split(/[\r\n]+/);
        const headerMap = {};
        arr.forEach((line) => {
            const parts = line.split(": ");
            const header = parts.shift().toLowerCase();
            const value = parts.join(": ");
            headerMap[header] = value;
        });
        headerValue = headerMap[headerKey.toLowerCase()];
    }
    catch (e) {
        // ignore the error
    }
    return headerValue;
}
export function request(method, url, queryParams = {}, body = null, options = {}, callback) {
    const defaultRequestOptions = RestConfigBase.requestOptions;
    const ignoreCache = options.ignoreCache || defaultRequestOptions.ignoreCache;
    const headers = options.headers || defaultRequestOptions.headers;
    const timeout = options.timeout || defaultRequestOptions.timeout;
    let xhr;
    if (typeof window === "undefined") { // Node
        xhr = new XHR.XMLHttpRequest();
    }
    else {
        xhr = new XMLHttpRequest();
    }
    xhr.open(method, withQuery(url, queryParams), true);
    if (headers) {
        Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]));
    }
    if (ignoreCache) {
        xhr.setRequestHeader("Cache-Control", "no-cache");
    }
    xhr.timeout = timeout;
    xhr.onload = (evt) => {
        callback(parseXHRResult(xhr));
    };
    xhr.onerror = (evt) => {
        callback(errorResponse(xhr, "Failed to make request."));
    };
    xhr.ontimeout = (evt) => {
        callback(errorResponse(xhr, "Request took longer than expected."));
    };
    if (method === "post" && body) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(body));
    }
    else {
        xhr.send();
    }
}
export function PromiseToEmptyCallback(promise, cb, err) {
    if (!!promise) {
        promise.then((result) => {
            try {
                if (!!cb) {
                    cb();
                }
            }
            catch (e) {
                if (!!err) {
                    err(`'Unhandled error on promise callback: ${e}'`);
                }
            }
        }, (reason) => {
            try {
                if (!!err) {
                    err(reason);
                }
                /* tslint:disable:no-empty */
            }
            catch (error) {
            }
        });
    }
    else {
        if (!!err) {
            err("Null promise");
        }
    }
}

//# sourceMappingURL=ConversationUtils.js.map
