// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ArgumentNullError, Deferred } from "../common/Exports";
// Node.JS specific xmlhttprequest / browser support.
import * as XHR from "xmlhttprequest-ts";
export var RestRequestType;
(function (RestRequestType) {
    RestRequestType["Get"] = "get";
    RestRequestType["Post"] = "post";
    RestRequestType["Delete"] = "delete";
    RestRequestType["File"] = "file";
})(RestRequestType || (RestRequestType = {}));
// accept rest operations via request method and return abstracted objects from server response
export class RestMessageAdapter {
    constructor(configParams, connectionId) {
        if (!configParams) {
            throw new ArgumentNullError("configParams");
        }
        this.privHeaders = configParams.headers;
        this.privTimeout = configParams.timeout;
        this.privIgnoreCache = configParams.ignoreCache;
    }
    setHeaders(key, value) {
        this.privHeaders[key] = value;
    }
    request(method, uri, queryParams = {}, body = null, binaryBody = null) {
        const responseReceivedDeferral = new Deferred();
        let xhr;
        if (typeof (XMLHttpRequest) === "undefined") {
            xhr = new XHR.XMLHttpRequest();
        }
        else {
            xhr = new XMLHttpRequest();
        }
        const requestCommand = method === RestRequestType.File ? "post" : method;
        xhr.open(requestCommand, this.withQuery(uri, queryParams), true);
        if (this.privHeaders) {
            Object.keys(this.privHeaders).forEach((key) => xhr.setRequestHeader(key, this.privHeaders[key]));
        }
        if (this.privIgnoreCache) {
            xhr.setRequestHeader("Cache-Control", "no-cache");
        }
        xhr.timeout = this.privTimeout;
        xhr.onload = () => {
            responseReceivedDeferral.resolve(this.parseXHRResult(xhr));
        };
        xhr.onerror = () => {
            responseReceivedDeferral.resolve(this.errorResponse(xhr, "Failed to make request."));
        };
        xhr.ontimeout = () => {
            responseReceivedDeferral.resolve(this.errorResponse(xhr, "Request took longer than expected."));
        };
        if (method === RestRequestType.File && binaryBody) {
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(binaryBody);
        }
        else if (method === RestRequestType.Post && body) {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(body));
        }
        else {
            xhr.send();
        }
        return responseReceivedDeferral.promise;
    }
    parseXHRResult(xhr) {
        return {
            data: xhr.responseText,
            headers: xhr.getAllResponseHeaders(),
            json: () => JSON.parse(xhr.responseText),
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
        };
    }
    errorResponse(xhr, message = null) {
        return {
            data: message || xhr.statusText,
            headers: xhr.getAllResponseHeaders(),
            json: () => JSON.parse(message || ("\"" + xhr.statusText + "\"")),
            ok: false,
            status: xhr.status,
            statusText: xhr.statusText,
        };
    }
    withQuery(url, params = {}) {
        const queryString = this.queryParams(params);
        return queryString ? url + (url.indexOf("?") === -1 ? "?" : "&") + queryString : url;
    }
    queryParams(params = {}) {
        return Object.keys(params)
            .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
            .join("&");
    }
}

//# sourceMappingURL=RestMessageAdapter.js.map
