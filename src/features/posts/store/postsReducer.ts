import {SET_POSTS} from "~features/posts/store/actionsTypes";
import {TPost} from "~features/posts/types/types";

export interface IState {
    posts: TPost[] | TPost | undefined;
}

interface IAction {
    type: string;
    payload: TPost[] | TPost;
}

const initialState: IState = {
    posts: undefined,
}

const postsReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
}

export default postsReducer;