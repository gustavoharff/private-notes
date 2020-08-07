import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: #E1E1E6;
    height: 677px;
  }

  #root {
    margin: 0 auto;
  }

  svg, img, a {
    user-select: none;
    -moz-window-dragging: none;
    -webkit-user-drag: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
