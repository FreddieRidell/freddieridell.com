import React from "react";
import * as R from "ramda";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";
import mix from "polished/lib/color/mix";

import { formatDate } from "../../util";

const PostContainer = styled(Link)(
	calm({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",

		padding: R.path(["theme", "size", "space", 3]),

		color: R.path(["theme", "color", "symantic", "text"]),

		transform: "translateX(0)",
		transition: R.pipe(
			R.path(["theme", "time", "normal"]),
			x => `all ${x}`,
		),

		":hover": {
			transform: R.pipe(
				R.path(["theme", "size", "space", 3]),
				x => `translateX(${x})`,
			),
		},
	}),
);

const PostTitle = styled.h3({ padding: 0 });

const PostMetaContainer = styled.aside(
	calm({
		display: "flex",
		flexWrap: "wrap",

		paddingLeft: R.path(["theme", "size", "space", 3]),
	}),
);

const PostMeta = styled.span(
	calm({
		flex: "0 0 auto",
		display: "block",
		fontSize: R.path(["theme", "size", "font", 2]),
		lineHeight: R.path(["theme", "size", "space", 5]),

		paddingLeft: R.path(["theme", "size", "space", 1]),
		paddingRight: R.path(["theme", "size", "space", 1]),

		color: R.pipe(
			R.applySpec({
				x: R.path(["theme", "color", "symantic", "background"]),
				y: R.path(["theme", "color", "symantic", "text"]),
			}),
			({ x, y }) => mix(1 / 3, x, y),
		),
	}),
);

const PostDescription = styled.div(
	calm({
		fontSize: R.path(["theme", "size", "font", 3]),
		lineHeight: R.path(["theme", "size", "space", 6]),
	}),
);

const Post = ({
	excerpt,
	timeToRead,
	wordCount,
	fields: { slug },
	frontmatter: { title, published, abstract, emoji },
}) => (
	<PostContainer to={slug}>
		<PostTitle>
			{emoji}
			{title}
		</PostTitle>

		<PostMetaContainer>
			<PostMeta>published {formatDate(published)}</PostMeta>
			<PostMeta>|</PostMeta>
			<PostMeta>{wordCount.words} words</PostMeta>
		</PostMetaContainer>

		<PostDescription>{abstract || excerpt}</PostDescription>
	</PostContainer>
);

export default Post;
