import { getCacheKey, setBaseUrl } from "./cache";

describe("cache utility", () => {
    describe("getCacheKey", () => {
        const baseURL = "https://dummy-api.com"; 
        beforeEach(() => {
            setBaseUrl(baseURL);
        });
        it("should return mapped key id with absolute path params", () => {
            const cacheKey = getCacheKey('/posts');
            expect(cacheKey).toEqual(`${baseURL}/posts`);
        });

        it("should return mapped key id with wildcard path params", () => {
            const cacheKey = getCacheKey('/posts/1');
            expect(cacheKey).toEqual(`${baseURL}/posts`);
        });

        it("should return same url if there is no mapped config provided", () => {
            const cacheKey = getCacheKey('/users');
            expect(cacheKey).toEqual(`${baseURL}/users`);
        });

        it("should return same url if there is no mapped config provided (diffrent url segment)", () => {
            const cacheKey = getCacheKey('/posts/1/history');
            expect(cacheKey).toEqual(`${baseURL}/posts/1/history`);
        });
    });
});