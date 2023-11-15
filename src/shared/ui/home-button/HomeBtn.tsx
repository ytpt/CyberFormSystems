import React from "react";
import {Wrapper, Button, GlobalStyle} from "./HomeBtn.styles";

type TBackBtnProps = {
    content: string;
}

const HomeBtn = ({content}: TBackBtnProps) => {
    const handleGoBack = () => window.history.back();

    return (
        <Wrapper>
            <GlobalStyle/>
            <Button onClick={handleGoBack}>
                {content}
            </Button>
        </Wrapper>
    )
}

export default HomeBtn;