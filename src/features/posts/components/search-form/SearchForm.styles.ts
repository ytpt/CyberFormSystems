import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-grey: #808080;
  }
`;

export const Form = styled.form`
    position: relative;
    display: inline-block;
`;

export const Input = styled.input`
    min-width: 500px;
    height: 30px;
    color: var(--color-grey);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    background-color: var(--color-white);
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: 0 0 6px 0 rgba(90, 90, 90, 0.20);
    text-indent: 42px;
`;

export const Button = styled.button`
    position: absolute;
    top: 10px;
    left: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
`;
