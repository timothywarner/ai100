// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ServicePropertiesPropertyName, } from "../common.speech/Exports";
import { PropertyId } from "../sdk/Exports";
import { QueryParameterNames } from "./QueryParameterNames";
export class ConnectionFactoryBase {
    setCommonUrlParams(config, queryParams, endpoint) {
        this.setUrlParameter(PropertyId.SpeechServiceConnection_EnableAudioLogging, QueryParameterNames.EnableAudioLogging, config, queryParams, endpoint);
        this.setUrlParameter(PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, QueryParameterNames.EnableWordLevelTimestamps, config, queryParams, endpoint);
        this.setUrlParameter(PropertyId.SpeechServiceResponse_ProfanityOption, QueryParameterNames.Profanity, config, queryParams, endpoint);
        this.setUrlParameter(PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs, QueryParameterNames.InitialSilenceTimeoutMs, config, queryParams, endpoint);
        this.setUrlParameter(PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs, QueryParameterNames.EndSilenceTimeoutMs, config, queryParams, endpoint);
        this.setUrlParameter(PropertyId.SpeechServiceResponse_StablePartialResultThreshold, QueryParameterNames.StableIntermediateThreshold, config, queryParams, endpoint);
        const serviceProperties = JSON.parse(config.parameters.getProperty(ServicePropertiesPropertyName, "{}"));
        Object.keys(serviceProperties).forEach((value, num, array) => {
            queryParams[value] = serviceProperties[value];
        });
    }
    setUrlParameter(propId, parameterName, config, queryParams, endpoint) {
        const value = config.parameters.getProperty(propId, undefined);
        if (value && (!endpoint || endpoint.search(parameterName) === -1)) {
            queryParams[parameterName] = value.toLocaleLowerCase();
        }
    }
}

//# sourceMappingURL=ConnectionFactoryBase.js.map
