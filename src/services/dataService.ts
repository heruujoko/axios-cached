import api from "./api";

export async function getPosts() {
    return await api.get('/posts');
}

// mocked action to test invalidation
export async function addNewPost() {
    return await api.post('/posts');
}

// mocked action to test invalidation
export async function patchPost(id: number) {
    return await api.put(`/posts/${id}`, {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
}