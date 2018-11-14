import React from "react";
import * as R from "ramda";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { Experiences, PersonalInfo, Skills } from "../components/home";

const getNavLinks = R.pipe(
  R.path(["data", "allSitePage", "edges"]),
  R.map(R.path(["node", "path"])),
  R.filter(slug => (slug.match(/\//g) || []).length === 2),
  R.sortBy(R.identity),

  R.map(slug => ({
    slug,
    label: slug.replace(/\//g, "").replace("-", " ")
  }))
);

const IndexPage = props => (
  <Layout title="Freddie Ridell" navLinks={getNavLinks(props)}>
    <PersonalInfo />
    <Skills />
    <Experiences />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
