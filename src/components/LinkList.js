import React, { Fragment } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location, Link as RouterLink } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

const LinkListItem = styled.li`

`;

const LinkLink = styled(RouterLink)`
	color: ${R.path(["theme","color", "black" ])};
	text-decoration: none;
	display: grid;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);

	grid-template-areas: "tile date" "excerpt excerpt";
`;

const LinkTitle = styled.h2`
	font-size: ${R.path(["theme", "size", "fontSize" ])};
`;

const LinkDate = styled.p`

`;

const LinkAbstract = styled.p`

`;

const Link = ({ fields: {slug}, excerpt, frontmatter: {title, published, abstract,}}) => (
	<LinkListItem>
		<LinkLink to = { slug } >
			<LinkTitle>{title}</LinkTitle>
			<LinkDate>{published}</LinkDate>
			<LinkAbstract>{ abstract || excerpt } </LinkAbstract>
		</LinkLink>
	</LinkListItem>
);

const LinkList = ({ data }) => (
	<ol>
		{data.map( post => <Link key = { post.fields.slug } {...post }/>)}
	</ol>
)

export default LinkList;
