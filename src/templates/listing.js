import React from "react";
import { graphql } from "gatsby";

import Listing from "../components/Listing";
import { getNavLinks } from "../util";

export default props => {
	return <Listing {...props} />;
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
