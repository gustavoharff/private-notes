import { createGlobalStyle } from 'styled-components';

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

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
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: #E1E1E6;
    background: #191622;
    ::-webkit-scrollbar {
      display: none;
    }
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
