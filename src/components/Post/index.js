import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import PageTitle from "../Toolbox/PageTitle";

const PostArticle = styled.article(
	calm({
		alignSelf: "center",
		maxWidth: R.pipe(
			R.path(["theme", "size", "paragraphWidth"]),
			R.multiply(3/4),
		),
	}),
);

const Post = ({
	data: {
		markdownRemark: {
			html,
			frontmatter: { abstract, gallery, npm, repo, tags, title, tldr },
		},
	},
}) => (
	<React.Fragment>
		<PageTitle>{title}</PageTitle>
		<PostArticle
			dangerouslySetInnerHTML={{
				__html: html,
			}}
		/>
	</React.Fragment>
);

export default Post;
