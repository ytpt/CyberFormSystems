import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #000;
  }
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    align-items: flex-start;
`;

export const StyledLink = styled(Link)`
    color: var(--color-black);
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    padding: 15px;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.5s ease;
    }
    
    h2 {
        text-align: center;
    }
`;