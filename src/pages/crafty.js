import React from "react";

import PostListings from "../components/postListings";

export default ({ data, }) => {
	return (
		<PostListings
			title = "Crafts"
			data = { data }
			requiredFrontmatter = { ["title", "published",] }
		/>
	);
};

export const query = graphql`
	query CraftyPostsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			filter: { fields: { slug: { regex: "/^/crafty/" } } }
		) {
			edges {
				node {
					fileAbsolutePath
					html
					excerpt
					timeToRead
					fields {
						slug
					}
					frontmatter {
						title
						abstract
						emoji
						image
						published
					}
				}
			}
		}
	}
`;
