import React from "react";
import { graphql } from "gatsby";
import styled, { keyframes } from "styled-components";
import * as R from "ramda";

import Layout from "../components/layout";
import { getNavLinks } from "../util";

const wipein = keyframes`
	from { right: 100%; }
	to { right: 0; }
`;

const Abstract = styled.div`
	position: relative;
	background-color: ${R.path(["theme", "color", "lightgray"])};
	padding: 1rem;
	padding-top: 2rem;
	font-size: 3rem;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		min-height: 1rem;
		background-color: ${R.path(["theme", "color", "gray"])};

		animation: ${wipein} 1.5s ease-out both;
	}
`;

export default props => {
	const {
		data: {
			markdownRemark: {
				html,
				frontmatter: { title, abstract, keywords },
			},
		},
	} = props;

	return (
		<Layout title={title} navLinks={getNavLinks(props)} keywords={keywords}>
			{abstract && <Abstract> {abstract} </Abstract>}
			<div dangerouslySetInnerHTML={{ __html: html }} />
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
				title
				abstract
				keywords
			}
		}
	}
`;
