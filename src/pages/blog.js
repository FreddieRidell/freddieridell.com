import React from "react";
import { modularScale, } from "polished";
import format from "date-fns/format";
import Link from 'gatsby-link'
import R from "ramda";
import styled from "styled-components";

const StyledBlogLink = styled.div`
	margin-top: 1rem;
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

const BlogLink = ({ emoji, abstract, title, published, slug, excerpt, }) => (
	<StyledBlogLink >
		<Link to = { slug }> 
			<StyledBlogTitleDateContainer>
				<BlogLinkTitle >
				 {title} { emoji }
			</BlogLinkTitle>
			<BlogLinkDate>
				{published}
			</BlogLinkDate>
		</StyledBlogTitleDateContainer>
		<BlogLinkExcerpt>
			{ abstract || excerpt}
		</BlogLinkExcerpt>
	</Link>
	</StyledBlogLink>
);

export default ({ data, ...props, }) => {
	const links = R.pipe(
		R.path([ "allMarkdownRemark", "edges", ]),
		R.map( ({ node: { excerpt, frontmatter: { emoji, abstract, title, published, }, fields: { slug, } } }) => ({
			title,
			published,
			slug,
			excerpt,
			abstract,
			emoji,
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
			{
				links.map( (props) => (
					<BlogLink key = { props.slug } { ...props } />
				))
			}
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
						abstract
						emoji
					}
				}
			}
		}
	}
`
