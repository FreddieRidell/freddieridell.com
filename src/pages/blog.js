import React from "react";

import PostListings from "../components/postListings";
export default ({ data }) => {
	return (
		<PostListings
			title="Blog"
			data={data}
			requiredFrontmatter={["title", "published"]}
		/>
	);
};

export const query = graphql`
	query BlogPostsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(filter: { fields: { slug: { regex: "/^/blog/" } } }) {
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
						published
					}
				}
			}
		}
	}
`;
