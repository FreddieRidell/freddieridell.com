import React from "react";
import * as R from "ramda";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const ListingTitle = styled.h1(
	calm({
		textTransform: "capitalize",
		paddingLeft: R.path(["theme", "size", "space", 2]),
	}),
);

const PostContainer = styled(Link)(
	calm({
		display: "block",
		color: R.path(["theme", "color", "symantic", "text"]),
		paddingLeft: R.path(["theme", "size", "space", 3]),
	}),
);

const PostTitle = styled.h3({});
const PostDate = styled.p({});
const PostDescription = styled.div({});

const Post = ({ excerpt, fields: { slug }, frontmatter: { title, published, abstract } }) => (
	<PostContainer to={slug}>
		<PostTitle>{title}</PostTitle>
		<PostDate></PostDate>
		<PostDescription>{ abstract || excerpt }</PostDescription>
	</PostContainer>
);

const Listing = props => (
	<React.Fragment>
		<ListingTitle>{props["*"]} Posts</ListingTitle>
		{props.data.allMarkdownRemark.edges.map(({ node }) => (
			<Post {...node} />
		))}
		<nav>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</nav>
	</React.Fragment>
);

export default Listing;
