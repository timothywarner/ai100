// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ObjectDisposedError } from "./Error";
import { createNoDashGuid } from "./Guid";
export class EventSource {
    constructor(metadata) {
        this.privEventListeners = {};
        this.privIsDisposed = false;
        this.onEvent = (event) => {
            if (this.isDisposed()) {
                throw (new ObjectDisposedError("EventSource"));
            }
            if (this.metadata) {
                for (const paramName in this.metadata) {
                    if (paramName) {
                        if (event.metadata) {
                            if (!event.metadata[paramName]) {
                                event.metadata[paramName] = this.metadata[paramName];
                            }
                        }
                    }
                }
            }
            for (const eventId in this.privEventListeners) {
                if (eventId && this.privEventListeners[eventId]) {
                    this.privEventListeners[eventId](event);
                }
            }
        };
        this.attach = (onEventCallback) => {
            const id = createNoDashGuid();
            this.privEventListeners[id] = onEventCallback;
            return {
                detach: () => {
                    delete this.privEventListeners[id];
                    return Promise.resolve();
                },
            };
        };
        this.attachListener = (listener) => {
            return this.attach(listener.onEvent);
        };
        this.isDisposed = () => {
            return this.privIsDisposed;
        };
        this.dispose = () => {
            this.privEventListeners = null;
            this.privIsDisposed = true;
        };
        this.privMetadata = metadata;
    }
    get metadata() {
        return this.privMetadata;
    }
}

//# sourceMappingURL=EventSource.js.map
