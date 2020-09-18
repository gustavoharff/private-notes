import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

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

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: #E1E1E6;
    background: #191622;
    ::-webkit-scrollbar {
      display: none;
    }
    -webkit-app-region: drag;
  }

  svg, img, a {
    user-select: none;
    -moz-window-dragging: none;
    -webkit-user-drag: none;
  }

  svg, img {
    -webkit-app-region: drag !important;
  }

  a {
    text-decoration: none;
    -webkit-app-region: no-drag;

  }

  ul {
    list-style: none;
  }

  input {
    -webkit-app-region: no-drag;
  }

  button {
    -webkit-app-region: no-drag;
    cursor: pointer;
  }
`;
