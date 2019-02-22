import React, { Fragment } from "react";
import * as R from "ramda";
import Helmet from "react-helmet";
import { Location, Link } from "@reach/router";
import styled, { withTheme, ThemeProvider } from "styled-components";

import theme from "./theme";
import { smol } from "../util";
import Head from "./Head";

const Topbar = styled.header`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "bg"])};
	padding: ${R.path(["theme", "size", "space", 0])};
	display: flex;
	flex-shrink: 0;
`;

const HomeLink = styled.div`
	flex: 1;
`;

const NavLink = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	margin-left: ${R.path(["theme", "size", "space", 1])};
	text-transform: capitalize;
`;

const Title = styled.h1`
	text-transform: capitalize;
	margin: ${R.path(["theme", "size", "space", 2])};
`;

const ChildrenContainer = styled.div`
	flex: 1;
	align-self: center;
	max-width: 65rem;
	width: calc(100% - ${R.path(["theme", "size", "space", 1])});
	padding: ${R.path(["theme", "size", "space", 1])};

	${smol(`padding: 0;`)}
`;

const Footer = styled.footer`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "white"])};
	padding: ${R.path(["theme", "size", "space", 0])};
`;

const Layout = ({
	children,
	title,
	description,
	keywords,
	navLinks = [],
	...props
}) => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<Head {...{ title, description, keywords }} />
			<Topbar>
				<HomeLink>
					<NavLink to="/">home</NavLink>
				</HomeLink>
				{navLinks.map(({ slug, label }) => (
					<NavLink to={slug}>{label}</NavLink>
				))}
			</Topbar>
			<Title>{title}</Title>
			<ChildrenContainer>{children}</ChildrenContainer>
			<Footer>
				©Ya' boi Freddie Ridell
				{new Date()
					.toISOString()
					.replace("T", " ")
					.replace(/\..*/, "")}
			</Footer>
		</Fragment>
	</ThemeProvider>
);

export default withTheme(Layout);
