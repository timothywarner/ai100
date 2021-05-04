// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { EventType } from "../common/Exports";
export class ConsoleLoggingListener {
    constructor(logLevelFilter = EventType.Warning) {
        this.onEvent = (event) => {
            if (event.eventType >= this.privLogLevelFilter) {
                const log = this.toString(event);
                switch (event.eventType) {
                    case EventType.Debug:
                        // tslint:disable-next-line:no-console
                        console.debug(log);
                        break;
                    case EventType.Info:
                        // tslint:disable-next-line:no-console
                        console.info(log);
                        break;
                    case EventType.Warning:
                        // tslint:disable-next-line:no-console
                        console.warn(log);
                        break;
                    case EventType.Error:
                        // tslint:disable-next-line:no-console
                        console.error(log);
                        break;
                    default:
                        // tslint:disable-next-line:no-console
                        console.log(log);
                        break;
                }
            }
        };
        this.toString = (event) => {
            const logFragments = [
                `${event.EventTime}`,
                `${event.Name}`,
            ];
            for (const prop in event) {
                if (prop && event.hasOwnProperty(prop) &&
                    prop !== "eventTime" && prop !== "eventType" &&
                    prop !== "eventId" && prop !== "name" &&
                    prop !== "constructor") {
                    const value = event[prop];
                    let valueToLog = "<NULL>";
                    if (value !== undefined && value !== null) {
                        if (typeof (value) === "number" || typeof (value) === "string") {
                            valueToLog = value.toString();
                        }
                        else {
                            valueToLog = JSON.stringify(value);
                        }
                    }
                    logFragments.push(`${prop}: ${valueToLog}`);
                }
            }
            return logFragments.join(" | ");
        };
        this.privLogLevelFilter = logLevelFilter;
    }
}

//# sourceMappingURL=ConsoleLoggingListener.js.map
