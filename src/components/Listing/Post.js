import React from "react";
import * as R from "ramda";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";
import { mix } from "polished";

import { formatDate } from "../../util";

const PostContainer = styled(Link)(
	calm({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",

		padding: R.path(["theme", "size", "space", 3]),
		paddingRight: R.path(["theme", "size", "space", 0]),

		color: R.path(["theme", "color", "symantic", "text"]),
	}),
);

const PostTitle = styled.h3({ padding: 0 });

const PostMetaContainer = styled.aside(
	calm({
		display: "flex",
		flexWrap: "wrap",

		paddingBottom: R.path(["theme", "size", "space", 2]),
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
			R.applySpec([
				R.path(["theme", "color", "symantic", "background"]),
				R.path(["theme", "color", "symantic", "text"]),
			]),
			([x, y]) => mix(1 / 3, x, y),
		),
	}),
);

const PostDescription = styled.div({});

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
