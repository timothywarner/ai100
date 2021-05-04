// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ProxyInfo, WebsocketConnection, } from "../common.browser/Exports";
import { PropertyId } from "../sdk/Exports";
import { ConnectionFactoryBase } from "./ConnectionFactoryBase";
import { WebsocketMessageFormatter } from "./Exports";
import { HeaderNames } from "./HeaderNames";
import { QueryParameterNames } from "./QueryParameterNames";
export class TranscriberConnectionFactory extends ConnectionFactoryBase {
    constructor() {
        super(...arguments);
        this.multiaudioRelativeUri = "/speech/recognition/multiaudio";
        this.create = (config, authInfo, connectionId) => {
            let endpoint = config.parameters.getProperty(PropertyId.SpeechServiceConnection_Endpoint, undefined);
            const region = config.parameters.getProperty(PropertyId.SpeechServiceConnection_Region, "centralus");
            const hostSuffix = (region && region.toLowerCase().startsWith("china")) ? ".azure.cn" : ".microsoft.com";
            const hostDefault = "wss://transcribe." + region + ".cts.speech" + hostSuffix + this.multiaudioRelativeUri;
            const host = config.parameters.getProperty(PropertyId.SpeechServiceConnection_Host, hostDefault);
            const queryParams = {};
            const endpointId = config.parameters.getProperty(PropertyId.SpeechServiceConnection_EndpointId, undefined);
            const language = config.parameters.getProperty(PropertyId.SpeechServiceConnection_RecoLanguage, undefined);
            if (endpointId) {
                if (!endpoint || endpoint.search(QueryParameterNames.CustomSpeechDeploymentId) === -1) {
                    queryParams[QueryParameterNames.CustomSpeechDeploymentId] = endpointId;
                }
            }
            else if (language) {
                if (!endpoint || endpoint.search(QueryParameterNames.Language) === -1) {
                    queryParams[QueryParameterNames.Language] = language;
                }
            }
            this.setCommonUrlParams(config, queryParams, endpoint);
            if (!endpoint) {
                endpoint = host;
            }
            const headers = {};
            if (authInfo.token !== undefined && authInfo.token !== "") {
                headers[authInfo.headerName] = authInfo.token;
            }
            headers[HeaderNames.ConnectionId] = connectionId;
            config.parameters.setProperty(PropertyId.SpeechServiceConnection_Url, endpoint);
            const enableCompression = config.parameters.getProperty("SPEECH-EnableWebsocketCompression", "false") === "true";
            return new WebsocketConnection(endpoint, queryParams, headers, new WebsocketMessageFormatter(), ProxyInfo.fromRecognizerConfig(config), enableCompression, connectionId);
        };
    }
}

//# sourceMappingURL=TranscriberConnectionFactory.js.map
