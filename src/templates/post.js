import React from "react";
import { graphql } from "gatsby";

import Post from "../components/Post";

export default props => {
	return <Post {...props} />;
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			wordCount {
				paragraphs
				sentences
				words
			}
			frontmatter {
				abstract
				crates
				emoji
				gallery
				npm
				published
				repo
				tags
				title
				tldr
			}
		}
	}
`;
