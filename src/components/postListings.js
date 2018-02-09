import R from "ramda";
import React from "react";
import format from "date-fns/fp/format";

import { Section, H1, Note, } from "../toolbox";

const formatDate = R.pipe(x => new Date(x), format("YYYY, MMM"));

const Listing = ({
	title,
	image,
	emoji,
	published,
	slug,
	abstract,
	excerpt,
}) => (
	<Section image = { image } title = { title + (emoji || "") } to = { slug }>
		{published && <Note> {formatDate(published)} </Note>}

		{abstract || excerpt}
	</Section>
);

const generateShaper = (requiredFrontmatter = []) =>
	R.pipe(
		R.pathOr([], ["allMarkdownRemark", "edges",]),
		R.pluck("node"),
		R.map(({ fields, frontmatter, ...rest }) => ({
			...rest,
			...fields,
			...frontmatter,
		})),

		R.filter(
			R.allPass([...requiredFrontmatter.map(prop => R.prop(prop)), R.T,]),
		),

		R.sortBy(R.prop("published")),

		R.reverse,
	);

export default ({ children, title, posts, data, requiredFrontmatter, }) => {
	const postsToRender = data
		? generateShaper(requiredFrontmatter)(data)
		: posts || [];

	return (
		<div>
			<Section>
				<H1>{title}</H1>
			</Section>

			{postsToRender.map(({ slug, ...rest }) => (
				<Listing key = { slug } slug = { slug } { ...rest } />
			))}
		</div>
	);
};
