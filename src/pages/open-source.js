import React from "react";
import R from "ramda";

import { Section, H1, } from "../toolbox";

const OpenSourceSection = ({ title, slug, abstract, excerpt, }) => (
	<Section title = { title } to = { slug } >
		{ abstract || excerpt }
	</Section>
);

export default ({ data, }) => {
	console.log(data);
	const openSourcePages = R.pipe(
		R.path([ "allMarkdownRemark", "edges", ]),
		R.pluck("node"),
		R.map( ({ fields, frontmatter, ...rest, }) => ({
			...rest,
			...fields,
			...frontmatter,
		})),

		R.filter( R.allPass([
			R.prop("title"),
			R.prop("published"),
			R.prop("listed"),
		])),

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
						abstract
						listed
					}
				}
			}
		}
	}
`;

