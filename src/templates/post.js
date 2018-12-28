import React, { Fragment } from "react";
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

const BadgeContainer = styled.div`
	display: flex;
	justify-content: flex-start
	align-items: flex-start;
   flex-flow: row wrap;
	margin-bottom: ${R.path(["theme", "size", "space", 0])};
`;

const Badge = styled.img`
	width: auto;
	min-width: ${R.path(["theme", "size", "space", 2])};
	min-height: ${R.path(["theme", "size", "space", 1])};
	margin-top: ${R.path(["theme", "size", "space", 0])};
	margin-right: ${R.path(["theme", "size", "space", 0])};
`;

const Badges = ({ npm, repo }) => (
	<Fragment>
		{npm && (
			<BadgeContainer>
				{[
					{
						badge: `https://badgen.net/badge/npm/${npm}?icon=npm&color=cb3837`,
						href: `https://npmjs.com/package/${npm}`,
					},
					{
						badge: `https://badgen.net/npm/v/${npm}`,
						href: `https://npmjs.com/package/${npm}`,
					},
					{
						badge: `https://badgen.net/npm/dependents/${npm}`,
						href: `https://www.npmjs.com/browse/depended/${npm}`,
					},
					{
						badge: `https://badgen.net/bundlephobia/min/${npm}`,
						href: `https://bundlephobia.com/result?p=${npm}`,
					},
					{
						badge: `https://badgen.net/bundlephobia/minzip/${npm}`,
						href: `https://bundlephobia.com/result?p=${npm}`,
					},
				].map(({ badge, href }) => (
					<a href={href}>
						<Badge src={badge} />
					</a>
				))}
			</BadgeContainer>
		)}

		{repo && (
			<BadgeContainer>
				{[
					{
						badge: `https://badgen.net/badge/github/${repo}?icon=github&color=333333`,
						href: `https://github.com/${repo}`,
					},
					{
						badge: `https://badgen.net/github/license/${repo}`,
						href: `https://github.com/${repo}`,
					},
					{
						badge: `https://badgen.net/github/stars/${repo}`,
						href: `https://github.com/${repo}/stargazers`,
					},
				].map(({ badge, href }) => (
					<a href={href}>
						<Badge src={badge} />
					</a>
				))}
			</BadgeContainer>
		)}
	</Fragment>
);

export default props => {
	const {
		data: {
			markdownRemark: {
				html,
				frontmatter: { title, abstract, tags, repo, npm },
			},
		},
	} = props;

	return (
		<Layout title={title} navLinks={getNavLinks(props)} keywords={tags}>
			{abstract && <Abstract> {abstract} </Abstract>}
			<Badges npm={npm} repo={repo} />
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
				tags
				npm
				repo
			}
		}
	}
`;
