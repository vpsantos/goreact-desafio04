import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #FFF;
    font-family: Helvetica, Arial, sans-serif;
    color: #000;
  }

  input, button {
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
