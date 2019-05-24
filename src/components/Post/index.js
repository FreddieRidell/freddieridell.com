import React from "react";

const Post = ({
	data: {
		markdownRemark: {
			html,
			frontmatter: { abstract, gallery, npm, repo, tags, title, tldr },
		},
	},
}) => <div />;

export default Post;
