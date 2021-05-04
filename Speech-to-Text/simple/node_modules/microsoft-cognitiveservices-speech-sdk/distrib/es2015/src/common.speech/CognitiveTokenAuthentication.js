// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ArgumentNullError } from "../common/Exports";
import { AuthInfo } from "./IAuthentication";
const AuthHeader = "Authorization";
export class CognitiveTokenAuthentication {
    constructor(fetchCallback, fetchOnExpiryCallback) {
        this.fetch = (authFetchEventId) => {
            return this.privFetchCallback(authFetchEventId).then((token) => new AuthInfo(AuthHeader, token));
        };
        this.fetchOnExpiry = (authFetchEventId) => {
            return this.privFetchOnExpiryCallback(authFetchEventId).then((token) => new AuthInfo(AuthHeader, token));
        };
        if (!fetchCallback) {
            throw new ArgumentNullError("fetchCallback");
        }
        if (!fetchOnExpiryCallback) {
            throw new ArgumentNullError("fetchOnExpiryCallback");
        }
        this.privFetchCallback = fetchCallback;
        this.privFetchOnExpiryCallback = fetchOnExpiryCallback;
    }
}

//# sourceMappingURL=CognitiveTokenAuthentication.js.map
