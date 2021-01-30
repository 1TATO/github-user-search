import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #292929;
  }

  body, input, button {
    font: 20px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
  }
`;