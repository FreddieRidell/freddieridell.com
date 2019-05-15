import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Post from "../components/Post";
import { getNavLinks } from "../util";

export default props => {
	const {
		data: {
			markdownRemark: {
				frontmatter: { abstract, tags, title },
			},
		},
	} = props;

	return (
		<Layout
			title={title}
			navLinks={getNavLinks(props)}
			keywords={tags}
			description={abstract || title}
		>
			<Post {...props} />
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		allSitePage(filter: { context: { listing: { eq: true } } }) {
			edges {
				node {
					path
				}
			}
		}

		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				abstract
				gallery
				npm
				repo
				tags
				title
				tldr
			}
		}
	}
`;
