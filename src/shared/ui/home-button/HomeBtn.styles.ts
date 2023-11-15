import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #000;
        --color-white: #ffffff; 
        --color-grey: #808080; 
    }
`;

export const Wrapper = styled.div`
    padding-left: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-black);
    color: var(--color-white);
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-start;
    
    &:hover {
        background-color: var(--color-grey);
    }   
`;