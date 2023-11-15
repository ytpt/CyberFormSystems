import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000;
    --color-grey: #808080;
    --bg-paginate-btn: #3e3e79;
    --bg-disabled-btn: #d3d3d3;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
    button {
        cursor: pointer;
        border-radius: 10px;
        border: none;
        background-color: var(--color-black);
        color: var(--color-white);
  
        &:disabled {
            background-color: var(--bg-disabled-btn);
        }
        
        &:not(:disabled):hover {
            background-color: var(--bg-paginate-btn);
            animation: ease-out color 0.5s;
        }
    }
    
    h4 {
        padding: 0 10px;
        color: var(--color-grey);
    }
`;