import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-grey: #808080;
    }
`;

export const PostElem = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
    padding: 25px;
    margin: 0;
    
    h2, p {
        margin: 0;
    }
`;