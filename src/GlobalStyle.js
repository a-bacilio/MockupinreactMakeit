import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


  :root {
    --mobileWidth: 3785px;
    --breakWidth: 768px;
    --maxWidth: 1440px;
    --white: hsl(0, 0%, 100%);
    --lightGrey: #eee;
    --color1: #5BBAF4;
    --color2: #3CA8D3;
    --color3: #F9CF70;
    --color4: #F7F1E6;
    --colorShade: #000000EE;
    --smallFont: 14px;
    --mediumFont: 16px;
    --bigFont: 18px;
    --xbigFont: 24px;
    --navbarBreak: 768px;
    --navbarHeight: 50px; 
  }

  * {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    text-decoration: none; 
  }

  #root{
    min-width:100vw;
    min-height:100vh;
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .App{
    width: 100%;
  }

`;


export default GlobalStyle;