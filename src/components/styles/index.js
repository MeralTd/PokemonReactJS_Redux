import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  *, *:before, *:after { 
    box-sizing: border-box; 
  }

  ul, p {
    margin: 0;
    padding: 0;
  }

  h1 {
  	font-weight: normal;
  	text-align:center;
  }

  a {
    text-decoration: none;
  }

  .container {
    padding: .5rem 2rem;
  }
`;

export default GlobalStyle;