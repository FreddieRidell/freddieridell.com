import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import PageTitle from "../Toolbox/PageTitle";
import Spacer from "../Toolbox/Spacer";

import Badges from "./Badges";

const PostArticle = styled.article(
	calm({
		alignSelf: "center",
		maxWidth: R.pipe(
			R.path(["theme", "size", "paragraphWidth"]),
			R.multiply(3 / 4),
		),
		width: "100%",
	}),
);

const Tldr = styled.aside(
	calm({
		paddingLeft: R.path(["theme", "size", "space", 3]),
		fontSize: R.path(["theme", "size", "font", 4]),
		fontStyle: "italic",
		maxWidth: R.pipe(
			R.path(["theme", "size", "paragraphWidth"]),
			R.multiply(3 / 4),
		),
	}),
);

const Post = ({
	data: {
		markdownRemark: {
			html,
			timeToRead,
			wordCount,
			frontmatter: {
				abstract,
				crates,
				gallery,
				npm,
				published,
				repo,
				tags,
				title,
				tldr,
			},
		},
	},
}) => (
	<React.Fragment>
		<PageTitle>{title}</PageTitle>
		{tldr && <Tldr>TLDR: {tldr}</Tldr>}
		<Badges {...{ npm, repo, crates }} />
		<Spacer height={6} />

		<PostArticle
			dangerouslySetInnerHTML={{
				__html: html,
			}}
		/>
	</React.Fragment>
);

export default Post;
