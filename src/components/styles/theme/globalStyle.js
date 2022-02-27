import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 15px;
    font-family: 'Spartan', sans-serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGrayishCyan};

    /* Display */
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  #root {
    width: 100%;
  }

`;

export default GlobalStyle;
