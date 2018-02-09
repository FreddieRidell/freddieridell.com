import React from "react";

import PostListings from "../components/postListings";

export default ({ data, }) => {
	return (
		<PostListings
			title = "Open Source"
			data = { data }
			requiredFrontmatter = { ["listed", "published", "title",] }
		/>
	);
};

export const query = graphql`
	query OpenSourcePostsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			filter: { fields: { slug: { regex: "/^/open-source/" } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						title
						abstract
						listed
						published
					}
				}
			}
		}
	}
`;
