import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Listing from "../components/Listing";
import { getNavLinks } from "../util";

export default props => {
	const {
		pageContext: { type },
	} = props;
	return (
		<Layout title={type} description={`${type} listing`}>
			<Listing {...props} />
		</Layout>
	);
};

export const query = graphql`
	query($type: String!) {
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: $type } } }
			sort: { fields: frontmatter___published, order: DESC }
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						title
						published
						abstract
					}
				}
			}
		}
	}
`;
