import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Home from "../components/Home";
import { getNavLinks } from "../util";

const IndexPage = props => (
	<Layout
		title="Freddie Ridell"
		navLinks={getNavLinks(props)}
		description="Home Page"
	>
		<Home />
	</Layout>
);

export default IndexPage;

export const query = graphql`
	query {
		allSitePage(filter: { context: { listing: { eq: true } } }) {
			edges {
				node {
					path
				}
			}
		}
	}
`;
