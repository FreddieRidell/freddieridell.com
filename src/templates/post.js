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
