import { XMLHttpRequest } from './XMLHttpRequest';
export interface XMLHttpRequestListeners {
    [key: string]: Array<(xhr: XMLHttpRequest) => any>;
}
