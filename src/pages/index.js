import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { Experiences, PersonalInfo, Skills } from "../components/home";
import { getNavLinks } from "../util";

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
		allSitePage(filter: { context: { listing: { eq: true } } }) {
			edges {
				node {
					path
				}
			}
		}
	}
`;
