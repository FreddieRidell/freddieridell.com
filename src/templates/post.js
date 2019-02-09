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
						badge: `https://badgen.net/badge/npm/${encodeURIComponent(
							npm,
						)}?icon=npm&color=cb3837`,
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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.gatsby-highlight {
		width: calc(-2rem + 100vw);
		max-width: 80rem;
		align-self: center;

		display: flex;
		justify-content: center;
	}
`;

const GalleryContainer = styled.div`
	overflow-x: auto;
`;

const Gallery = styled.div`
	align-self: center;
	display: flex;
	flex-direction: row;
`;

const GalleryImage = styled.a`
	width: 25rem;
	height: 25rem;
	display: block;
	background-image: url(${R.prop("src")});
	background-size: cover;
	background-position: center center;
	margin: 0 1rem;
	flex: 0 0 auto;
`;

export default props => {
	const {
		data: {
			markdownRemark: {
				html,
				frontmatter: { title, abstract, tags, repo, npm, gallery },
			},
		},
	} = props;

	return (
		<Layout title={title} navLinks={getNavLinks(props)} keywords={tags}>
			{abstract && <Abstract> {abstract} </Abstract>}
			{gallery && (
				<GalleryContainer>
					<Gallery>
						{" "}
						{gallery.map(url => (
							<GalleryImage
								key={url}
								href={`https://res.cloudinary.com/little-bonsai/image/upload/f_auto/v1548885223/${url}`}
								src={`https://res.cloudinary.com/little-bonsai/image/upload/c_fill,f_auto,q_auto,w_700,ar_1.0/v1548885223/${url}`}
							/>
						))}
					</Gallery>
				</GalleryContainer>
			)}
			<Badges npm={npm} repo={repo} />
			<Content dangerouslySetInnerHTML={{ __html: html }} />
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
				gallery
			}
		}
	}
`;
