import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {PATH_PAGE} from "~shared/lib/path";
import Post from "~features/posts/components/post/Post";
import {TPost} from "~features/posts/types/types";
import {useSelector} from "react-redux";

export const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const posts = useSelector((state: {posts:{posts: TPost[]}}) => state.posts.posts);
    const [foundPost, setFoundPost] = useState<TPost | null>(null);

    useEffect(() => {
        postId && getPostById(postId);
    }, [postId, posts])

    const getPostById = (postId: string) => {
        if (posts) {
            const foundPost = posts.find((spot: TPost) => spot.id === Number(postId));
            foundPost ? setFoundPost(foundPost) : navigate(PATH_PAGE.page404);
        } else {
            navigate(PATH_PAGE.root);
        }
    }

    return (
        <>
            {foundPost && <Post post={foundPost}/>}
        </>
    )
}