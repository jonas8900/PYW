import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}


body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

/* @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
} */


`;
