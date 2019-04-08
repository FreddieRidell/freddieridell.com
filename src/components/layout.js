import React, { Fragment } from "react";
import * as R from "ramda";
import { Link } from "@reach/router";
import styled, { withTheme, ThemeProvider } from "styled-components";

import theme from "./theme";
import { smol } from "../util";
import Head from "./Head";
import WebRing from "./WebRing";

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

const GridContainer = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: [start] 1fr [left] minmax(40%, 65rem) [right] 1fr [end];
`;

const Title = styled.h1`
	text-transform: capitalize;
	margin: ${R.path(["theme", "size", "space", 2])};
	grid-column: start / right;
	grid-gap: 1rem;
`;

const Footer = styled.footer`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "white"])};
	padding: ${R.path(["theme", "size", "space", 1])};
	margin-top: ${R.path(["theme", "size", "space", 3])};
`;

const FooterSection = styled.section`
	display: inline;
	margin: 0 ${R.path(["theme", "size", "space", 0])};
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
			<GridContainer>
				<Title>{title}</Title>
				{children}
			</GridContainer>
			<Footer>
				<FooterSection>©Ya' boi Freddie Ridell</FooterSection>
				<FooterSection>
					{new Date()
						.toISOString()
						.replace("T", " ")
						.replace(/\..*/, "")}
					</FooterSection>
					<FooterSection>
						<WebRing />
					</FooterSection>
			</Footer>
		</Fragment>
	</ThemeProvider>
);

export default withTheme(Layout);
