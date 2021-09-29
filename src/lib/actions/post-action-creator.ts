import { PostActions } from "./post-actions";

export function loadAllPosts() {
    return {
        type: PostActions.GET_ALL,
        payload: {
            request: {
                url: '/posts'
            }
        }
    }
}