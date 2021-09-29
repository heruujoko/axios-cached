import { PostActions } from "../actions/post-actions";

interface PostState {
    posts: any[]
}

const initialState: PostState = {
    posts: [],
};

export function postReducer(state = initialState, action: any) {
    switch(action.type) {
        case `${PostActions.GET_ALL}_SUCCESS`:
            return {
                ...state,
                posts: action.payload.data
            }
        default:
            return state;
    }
}