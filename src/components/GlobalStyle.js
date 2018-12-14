import React, { Fragment } from "react";
import * as R from "ramda";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 8px;
}

body {
  margin: 0;
  font-size: 2rem;
  font-family: "Trebuchet MS", arial, sans-serif;
  hanging-punctuation: first last;
}

html, body, #___gatsby, #___gatsby > div {
   min-height: 100%;
   height: 100%;
}

#___gatsby > div {
   display: flex;
   flex-direction: column;
}

a {
   font-weight: bold;
   text-decoration: none;
   color: ${R.path(["theme", "color", "black"])};
}

a:hover, a:active { text-decoration: underline; }

img { width: 100%; }

h1 { font-size: 8rem; line-height: 8rem; }
h2 { font-size: 5.65685424949rem; line-height: 6rem; }
h3 { font-size: 4rem; line-height: 4rem; }
h4 { font-size: 2.82842712475rem; line-height: 3rem; }
h1, h2, h3, h4 { margin: 3rem 0 1rem; }
p, code, blockquote { margin: 0 0 2rem; }

p {
  line-height: 3rem;
  font-size: 2rem;
  letter-spacing: 0.5px;
  text-align: justify;
  text-justify: auto;
}

code {
  white-space: pre;
  display: block;
  font-size: 2rem;
  font-family: Monaco, Consolas, monospaced;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

blockquote {
  position: relative;
  background-color: lightgray;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    min-width: 1rem;
    background-color: gray;
  }

  & > blockquote {
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: 2rem;

    &::before {
      content: "-";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1rem;
      background-color: initial;
    }
  }
}
`;

export default GlobalStyle;
