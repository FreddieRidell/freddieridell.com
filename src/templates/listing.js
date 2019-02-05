import React from "react";
import { graphql } from "gatsby";
import * as R from "ramda";

import Layout from "../components/layout";
import LinkList from "../components/LinkList";
import { getNavLinks } from "../util";

export default props => {
	const {
		data: {
			allMarkdownRemark: { edges },
		},
		pageContext: { type },
	} = props;
	return (
		<Layout
			title={type}
			navLinks={getNavLinks(props)}
			description={`${type} listing`}
		>
			<LinkList data={edges.map(R.prop("node"))} />
		</Layout>
	);
};

export const query = graphql`
	query($type: String!) {
		allSitePage(filter: { context: { listing: { eq: true } } }) {
			edges {
				node {
					path
				}
			}
		}

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
