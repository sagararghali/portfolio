import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    text-decoration: underline;
  }

  div {
    padding: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
  }

  p {
    color: #666;
  }
`;

export default GlobalStyle;
