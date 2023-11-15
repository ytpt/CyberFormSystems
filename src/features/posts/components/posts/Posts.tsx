import React from "react";
import {TPost} from "~features/posts/types/types";
import {Wrapper, PostsContainer, StyledLink, GlobalStyle} from "./Posts.styles";
import {constants} from "~constants/constants";
import PostNumber from "~features/posts/components/post/post-number/PostNumber";

type TPostsProps = {
    posts: TPost[];
    onPostClick: (postId: number) => void;
    currentPage: number;
}

const Posts = ({posts, onPostClick, currentPage}: TPostsProps) => {
    return (
        <Wrapper>
            <GlobalStyle/>
            {currentPage && +currentPage === 1 && <h1>Посты</h1>}
            <PostsContainer>
                {posts && posts.map((post: TPost) =>
                    <StyledLink
                        key={post.id}
                        to={`/posts/${post.id}`}
                        onClick={() => onPostClick(post.id)}
                    >
                        <PostNumber content={constants.post} postId={post.id}/>
                        <h2>{post.title}</h2>
                    </StyledLink>
                )}
            </PostsContainer>
        </Wrapper>
    )
}

export default Posts;