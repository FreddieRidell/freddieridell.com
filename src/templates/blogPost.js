import React from "react";
import { modularScale, } from "polished";
import styled from "styled-components";

const Abstract = styled.div`
	font-size: ${modularScale(1)};
	font-style: italic;
	margin-left: 1em;
	margin-bottom: 0.2em;
	color: gray;

	&::before {
		background-color: gray;
		width: 0.5em;
		height: 100%;
		display: block;
	}
`;

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			{post.frontmatter.abstract
					&&
					<Abstract>
						{post.frontmatter.abstract}
					</Abstract>
			}
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	);
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
	markdownRemark(fields: { slug: { eq: $slug } }) {
	  html
	  frontmatter {
		title
		abstract
	  }
	}
  }
`;

