import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #000;
    --red: #ff0000;
    --gray: #84848D;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }
`;