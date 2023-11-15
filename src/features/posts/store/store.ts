import {createStore, combineReducers} from "redux";
import postsReducer from "~features/posts/store/postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);