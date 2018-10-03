import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

import "./layout.css";
import theme from "./theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 2rem 4rem 1fr 2rem;

  grid-template-areas: "header header header" "hero hero hero" "gutter-left content gutter-right" "footer footer footer";
`;

const Topbar = styled.div`
  background-color: ${R.path(["theme", "color", "black"])};
  grid-area: header;
`;

const Footer = styled.div`
  background-color: ${R.path(["theme", "color", "black"])};
  color: ${R.path(["theme", "color", "white"])};
  grid-area: footer;
`;

const Layout = ({ children, location, withHero, ...props }) => (
  <Location>
    {({ location }) => {
      const pathList = location.pathname.split("/");

      return (
        <ThemeProvider theme={theme}>
          <>
            <Helmet
              title="FreddieRidell.com"
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
              ]}
            >
              <html lang="en" />
            </Helmet>

            <Grid withHero={withHero}>
              <Topbar>Freddie Ridell</Topbar>
              <div>{children}</div>
              <Footer>©Ya' boi Freddie {new Date().toISOString()}</Footer>
            </Grid>
          </>
        </ThemeProvider>
      );
    }}
  </Location>
);

export default Layout;
