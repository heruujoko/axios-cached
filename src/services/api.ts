import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import { setBaseUrl, getCacheKey } from '../lib/cache';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

setBaseUrl(BASE_URL);

// Create `axios-cache-adapter` instance
export const cache = setupCache({
  maxAge: 1 * 60 * 1000,
  invalidate: async (config, request) => {
    const invalidatedMethods = ['post', 'put', 'patch', 'delete'];
    if (request.method && invalidatedMethods.includes(request.method?.toLowerCase())) {
        // @ts-ignore
        const key = getCacheKey(request.url) ?? config.uuid;
        console.warn(`Busting cache ${key}`);
        // @ts-ignore
        await config.store.removeItem(key)
    }
  }
})

const api = axios.create({
    baseURL: BASE_URL,
    adapter: cache.adapter
})

export default api;