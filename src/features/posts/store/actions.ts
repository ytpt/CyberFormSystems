import {TPost} from "~features/posts/types/types";
import {SET_POSTS} from "~features/posts/store/actionsTypes";

export const setPosts = (posts: TPost[] | TPost | undefined) => ({
    type: SET_POSTS,
    payload: posts,
});