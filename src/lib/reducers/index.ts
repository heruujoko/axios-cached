import { combineReducers } from "redux";
import { postReducer } from "./post-reducer";

const reducers = combineReducers({
    posts: postReducer
});
export default reducers;