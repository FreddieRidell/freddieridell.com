import React from "react";
import { modularScale, } from "polished";
import format from "date-fns/format";
import Link from 'gatsby-link'
import R from "ramda";
import styled from "styled-components";

const StyledBlogLink = styled.div`
	margin: 1em 0;
`;

const StyledBlogTitleDateContainer = styled.div`
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
`;

const BlogLinkTitle = styled.div`
	font-size: ${ modularScale(1) };
`;

const BlogLinkDate = styled.div`
	font-size: ${ modularScale(-1) };
	font-weight: normal;
`;

const BlogLinkExcerpt = styled.div`
	font-weight: normal;
`;

const BlogLink = ({ title, published, slug, excerpt, }) => (
	<Link to = { slug }>
		<li>
			<StyledBlogLink>
				<StyledBlogTitleDateContainer>
				<BlogLinkTitle>
					{title}
				</BlogLinkTitle>
				<BlogLinkDate>
					{published}
				</BlogLinkDate>
			</StyledBlogTitleDateContainer>
				<BlogLinkExcerpt>
					{excerpt}
				</BlogLinkExcerpt>
			</StyledBlogLink>
		</li>
	</Link>
);

export default ({ data, ...props, }) => {
	const links = R.pipe(
		R.path([ "allMarkdownRemark", "edges", ]),
		R.map( ({ node: { excerpt, frontmatter: { title, published, }, fields: { slug, } } }) => ({
			title,
			published,
			slug,
			excerpt,
		})),

		R.filter(R.prop("published")),

		R.sortBy(R.prop("published")),

		R.reverse,

		R.map(R.evolve({
			published: published => format( new Date( 1000 * published), "DD/MM/YY"),
		})),
	)(data);

	return (
		<div>
			{ links.length } Posts
			<ul>
				{
					links.map( (props) => (
						<BlogLink key = { props.slug } { ...props } />
					))
				}
			</ul>
		</div>
	);
};

export const query = graphql`
						query AboutQuery {
							site {
								siteMetadata {
									title
								}
							}
							allMarkdownRemark(filter: {fields: {slug: {regex: "/^\/blog/"}}}) {
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
											published
										}
									}
									}
									}
									}
									`
