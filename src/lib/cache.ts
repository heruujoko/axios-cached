import * as _ from 'lodash';
import URLPattern from 'url-pattern'
// in case we have different action endpoint that affect GET response on another endpoint
const cacheMap: { [index: string]: string } = {
    "/posts/:id": "/posts",
};
let baseURL = "";
export function getCacheKey(url: string): string {
    // split baseURL first
    const [subPath] = url.split(baseURL);
    let mapped = url;
    if (subPath) {
       _.forOwn(cacheMap, (v, k) => {
           const pattern = new URLPattern(k);
           if (pattern.match(subPath)) {
               mapped = v;
           }
       });
    }
    return `${baseURL}${mapped}`;
}

export function setBaseUrl(url: string): void {
    baseURL = url;
}