// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ObjectDisposedError } from "./Error";
export class List {
    constructor(list) {
        this.privSubscriptionIdCounter = 0;
        this.privAddSubscriptions = {};
        this.privRemoveSubscriptions = {};
        this.privDisposedSubscriptions = {};
        this.privDisposeReason = null;
        this.get = (itemIndex) => {
            this.throwIfDisposed();
            return this.privList[itemIndex];
        };
        this.first = () => {
            return this.get(0);
        };
        this.last = () => {
            return this.get(this.length() - 1);
        };
        this.add = (item) => {
            this.throwIfDisposed();
            this.insertAt(this.privList.length, item);
        };
        this.insertAt = (index, item) => {
            this.throwIfDisposed();
            if (index === 0) {
                this.privList.unshift(item);
            }
            else if (index === this.privList.length) {
                this.privList.push(item);
            }
            else {
                this.privList.splice(index, 0, item);
            }
            this.triggerSubscriptions(this.privAddSubscriptions);
        };
        this.removeFirst = () => {
            this.throwIfDisposed();
            return this.removeAt(0);
        };
        this.removeLast = () => {
            this.throwIfDisposed();
            return this.removeAt(this.length() - 1);
        };
        this.removeAt = (index) => {
            this.throwIfDisposed();
            return this.remove(index, 1)[0];
        };
        this.remove = (index, count) => {
            this.throwIfDisposed();
            const removedElements = this.privList.splice(index, count);
            this.triggerSubscriptions(this.privRemoveSubscriptions);
            return removedElements;
        };
        this.clear = () => {
            this.throwIfDisposed();
            this.remove(0, this.length());
        };
        this.length = () => {
            this.throwIfDisposed();
            return this.privList.length;
        };
        this.onAdded = (addedCallback) => {
            this.throwIfDisposed();
            const subscriptionId = this.privSubscriptionIdCounter++;
            this.privAddSubscriptions[subscriptionId] = addedCallback;
            return {
                detach: () => {
                    delete this.privAddSubscriptions[subscriptionId];
                    return Promise.resolve();
                },
            };
        };
        this.onRemoved = (removedCallback) => {
            this.throwIfDisposed();
            const subscriptionId = this.privSubscriptionIdCounter++;
            this.privRemoveSubscriptions[subscriptionId] = removedCallback;
            return {
                detach: () => {
                    delete this.privRemoveSubscriptions[subscriptionId];
                    return Promise.resolve();
                },
            };
        };
        this.onDisposed = (disposedCallback) => {
            this.throwIfDisposed();
            const subscriptionId = this.privSubscriptionIdCounter++;
            this.privDisposedSubscriptions[subscriptionId] = disposedCallback;
            return {
                detach: () => {
                    delete this.privDisposedSubscriptions[subscriptionId];
                    return Promise.resolve();
                },
            };
        };
        this.join = (seperator) => {
            this.throwIfDisposed();
            return this.privList.join(seperator);
        };
        this.toArray = () => {
            const cloneCopy = Array();
            this.privList.forEach((val) => {
                cloneCopy.push(val);
            });
            return cloneCopy;
        };
        this.any = (callback) => {
            this.throwIfDisposed();
            if (callback) {
                return this.where(callback).length() > 0;
            }
            else {
                return this.length() > 0;
            }
        };
        this.all = (callback) => {
            this.throwIfDisposed();
            return this.where(callback).length() === this.length();
        };
        this.forEach = (callback) => {
            this.throwIfDisposed();
            for (let i = 0; i < this.length(); i++) {
                callback(this.privList[i], i);
            }
        };
        this.select = (callback) => {
            this.throwIfDisposed();
            const selectList = [];
            for (let i = 0; i < this.privList.length; i++) {
                selectList.push(callback(this.privList[i], i));
            }
            return new List(selectList);
        };
        this.where = (callback) => {
            this.throwIfDisposed();
            const filteredList = new List();
            for (let i = 0; i < this.privList.length; i++) {
                if (callback(this.privList[i], i)) {
                    filteredList.add(this.privList[i]);
                }
            }
            return filteredList;
        };
        this.orderBy = (compareFn) => {
            this.throwIfDisposed();
            const clonedArray = this.toArray();
            const orderedArray = clonedArray.sort(compareFn);
            return new List(orderedArray);
        };
        this.orderByDesc = (compareFn) => {
            this.throwIfDisposed();
            return this.orderBy((a, b) => compareFn(b, a));
        };
        this.clone = () => {
            this.throwIfDisposed();
            return new List(this.toArray());
        };
        this.concat = (list) => {
            this.throwIfDisposed();
            return new List(this.privList.concat(list.toArray()));
        };
        this.concatArray = (array) => {
            this.throwIfDisposed();
            return new List(this.privList.concat(array));
        };
        this.isDisposed = () => {
            return this.privList == null;
        };
        this.dispose = (reason) => {
            if (!this.isDisposed()) {
                this.privDisposeReason = reason;
                this.privList = null;
                this.privAddSubscriptions = null;
                this.privRemoveSubscriptions = null;
                this.triggerSubscriptions(this.privDisposedSubscriptions);
            }
        };
        this.throwIfDisposed = () => {
            if (this.isDisposed()) {
                throw new ObjectDisposedError("List", this.privDisposeReason);
            }
        };
        this.triggerSubscriptions = (subscriptions) => {
            if (subscriptions) {
                for (const subscriptionId in subscriptions) {
                    if (subscriptionId) {
                        subscriptions[subscriptionId]();
                    }
                }
            }
        };
        this.privList = [];
        // copy the list rather than taking as is.
        if (list) {
            for (const item of list) {
                this.privList.push(item);
            }
        }
    }
}

//# sourceMappingURL=List.js.map
