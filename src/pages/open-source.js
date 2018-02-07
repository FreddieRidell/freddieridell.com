import React from "react";
import { modularScale, } from "polished";
import format from "date-fns/format";
import R from "ramda";
import styled from "styled-components";

import { SilentLink, Section, H1, } from "../toolbox";

const OpenSourceSection = ({ title, slug, excerpt, }) => (
			<Section
				title = { title } 
				to = { slug }
			>
				{ excerpt }
			</Section>
);

export default ({ data, }) => {
	const openSourcePages = R.pipe(
		R.path([ "allMarkdownRemark", "edges", ]),
		R.pluck("node"),
		R.map( ({ fields, frontmatter, ...rest, }) => ({
			...rest,
			...fields,
			...frontmatter,
		})),

		R.filter( R.both(
			R.prop("title"),
			R.prop("published"),
		)),

		R.sortBy(R.prop("published")),

	)(data);

	return (
		<div>
			<Section>
				<H1>Open Source
				</H1>
			</Section>

			{
				openSourcePages.map( ({ slug, ...rest, }) => (
						<OpenSourceSection
							key = { slug }
							slug = { slug } 
							{ ...rest }
						/>
					)
				)
			}
		</div>
	);
};

export const query = graphql`
	query OpenSourcePostsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(filter: { fields: { slug: { regex: "/^/open-source/" } } }) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						title
						published
						excerpt
					}
				}
			}
		}
	}
`;

