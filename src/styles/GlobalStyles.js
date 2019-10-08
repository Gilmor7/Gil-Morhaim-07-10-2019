import { createGlobalStyle } from 'styled-components';

// reset css and global styles

const GlobalStyles = createGlobalStyle`
html {
    font-size:62.5%; 
    height:100%;
}

body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyles;