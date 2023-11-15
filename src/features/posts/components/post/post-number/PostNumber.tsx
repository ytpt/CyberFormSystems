import React from "react";
import {Number} from "./PostNumber.styles";

type TPostNumberProps = {
    content: string;
    postId: number;
}

const PostNumber = ({content, postId}: TPostNumberProps) => {
    return (
        <Number>{content} {postId}</Number>
    )
}

export default PostNumber;