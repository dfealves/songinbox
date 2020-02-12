import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html, body, #root {
    min-height: 100vh;
    overflow: hidden auto;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #F0F0F0;
  }
  body, input {
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Istok Web', sans-serif;
    cursor: pointer !important;
  }


`;
