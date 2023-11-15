import React from "react";
import {PostElem, GlobalStyle} from "./Post.styles";
import {TPost} from "~features/posts/types/types";
import {constants} from "~constants/constants";
import BackBtn from "~shared/ui/home-button/HomeBtn";
import PostNumber from "~features/posts/components/post/post-number/PostNumber";

type TPostProps = {
    post: TPost;
}

const Post = ({post}: TPostProps) => {
    return (
        <>
            <GlobalStyle/>
            <PostElem>
                <PostNumber content={constants.post} postId={post.id}/>
                <h2>{post.title}</h2>
                <h5>{post.body}</h5>
            </PostElem>
            <BackBtn content={constants.home}/>
        </>
    )
}

export default Post;