import React from "react";
import { modularScale, } from "polished";
import styled from "styled-components";

const Abstract = styled.div`
	font-size: 3rem;
	font-style: italic;
	padding-left: 3rem;
	margin-bottom: 2rem;
	margin-top: 2rem;
	color: gray;
	position: relative;

	::after {
	  content: " ";
		background-color: gray;
		bottom: 0;
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 1rem;
	}
`;

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			{
				( post.frontmatter.abstract) &&
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
		emoji
	  }
	}
  }
`;

