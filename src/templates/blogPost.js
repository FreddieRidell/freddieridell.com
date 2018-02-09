import React from "react";
import styled from "styled-components";
import system from "system-components";

import { Section, } from "../toolbox";

const Abstract = system({
	fontSize: 2,
	pl: 2,
	my: 2,
	color: "gray",
}).extend`
	font-style: italic;
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
		width: 0.5em;
	}
`;

const MarkdownContainer = styled.div`
	p {
		margin-bottom: 8px;
	}

	img {
		width: 100%;
	}
`;

export default ({ data, }) => {
	const post = data.markdownRemark;
	return (
		<Section>
			<h1>
				{" "}
				{post.frontmatter.title} {post.frontmatter.emoji}{" "}
			</h1>
			{post.frontmatter.abstract && (
				<Abstract>{post.frontmatter.abstract}</Abstract>
			)}
			<MarkdownContainer
				dangerouslySetInnerHTML = { { __html: post.html, } }
			/>
		</Section>
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
