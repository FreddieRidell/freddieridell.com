import React from 'react'
import * as R from "ramda";
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";

const getNavLinks = R.pipe(
   R.path(["data", "allSitePage", "edges" ]),
   R.map(R.path(["node", "path"])),
   R.filter( slug => (slug.match(/\//g) || []).length === 2 ),
   R.sortBy(R.identity),

   R.map( slug => ({
      slug,
      label: slug.replace(/\//g, "").replace("-", " "),
   }))
)

const IndexPage = (props) => (
   console.log( getNavLinks(props) ),
   <Layout title = "Freddie Ridell.com" navLinks = { getNavLinks(props)} >
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
   </Layout>
)

export default IndexPage

export const query = graphql`
query{
   allSitePage{
      edges{
         node{
            path
         }
      }
   }
}
`
