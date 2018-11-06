import React, { Fragment } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location, Link as RouterLink } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

const LinkListItem = styled.li`
	list-style-type: none;
	margin: ${R.path(["theme", "size", "space", 2])} ${R.path(["theme", "size", "space", 1])};

	&::after {
		content: "",
		width: 100%;
		height: 1px;
		background-color: ${R.path(["theme","color", "black" ])};
	}
`;

const LinkLink = styled(RouterLink)`
	color: ${R.path(["theme","color", "black" ])};
	text-decoration: none;
	display: flex;
	flex-direction: column;
`;

const LinkTopBit = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: ${R.path(["theme", "size", "space", 0])};
`;

const LinkTitle = styled.h2`
	font-size: ${R.path(["theme", "size", "fontSize", 2, ])};
	flex: 1;
	margin: 0;
`;

const LinkDate = styled.p`
	margin: 0;
	color: ${R.path(["theme","color", "gray" ])};
	margin-left: ${R.path(["theme", "size", "space", 0])};

	@media (max-width: 25rem) {
		display: none;
	}
`;

const LinkAbstract = styled.p`
	margin: 0;
`;

const Link = ({ fields: {slug}, excerpt, frontmatter: {title, published, abstract,}}) => (
	<LinkListItem>
		<LinkLink to = { slug } >
			<LinkTopBit>
				<LinkTitle>{title}</LinkTitle>
				<LinkDate>{published}</LinkDate>
			</LinkTopBit>
			<LinkAbstract>{ abstract || excerpt } </LinkAbstract>
		</LinkLink>
	</LinkListItem>
);

const List = styled.ol`
	padding: 0;
	margin: ${R.path(["theme", "size", "space", 1])};
`;

const LinkList = ({ data }) => (
	<List>
		{data.map( post => <Link key = { post.fields.slug } {...post }/>)}
	</List>
)

export default LinkList;
