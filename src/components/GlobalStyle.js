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
  font-family: sans-serif;
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

a:hover, a:active {
   text-decoration: underline;
}

img { 
   width: 100%;
}
`

export default GlobalStyle;
