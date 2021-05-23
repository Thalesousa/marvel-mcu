import { createGlobalStyle } from 'styled-components';
import avengers from '../assets/background.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #000;
    --red: #ff0000;
    --red-gradient: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(64,14,14,1) 100%);
    --gray: #84848D;
    --white: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${avengers}) no-repeat #000;
    background-position: 650px;
  }
`;