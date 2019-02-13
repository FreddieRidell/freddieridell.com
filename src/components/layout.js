import React, { Fragment } from "react";
import * as R from "ramda";
import Helmet from "react-helmet";
import { Location, Link } from "@reach/router";
import styled, { withTheme, ThemeProvider } from "styled-components";

import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import PrisimStyle from "./PrisimStyle";
import { smol } from "../util";

const Topbar = styled.header`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "bg"])};
	padding: ${R.path(["theme", "size", "space", 0])};
	display: flex;
	flex-shrink: 0;
`;

const Breadcrumbs = styled.div`
	flex: 1;
`;

const Breadcrumb = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	::after {
		content: "/";
		text-decoration: none;
		&::hover {
			text-decoration: none;
		}
	}
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

	${smol(`
      padding: 0;
      `)}
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
	<Location>
		{({ location }) => (
			<ThemeProvider theme={theme}>
				<Fragment>
					<Helmet>
						<title>
							{title
								? `${title} - FreddieRidell.com`
								: "FreddieRidell.com"}
						</title>
						<meta
							name="description"
							content={`${description} - freddieridell.com`}
						/>
						<meta
							name="keywords"
							content={(keywords || []).join(", ")}
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, shrink-to-fit=no"
						/>
						<html lang="en" />
					</Helmet>
					<GlobalStyle />
					<PrisimStyle />
					<Topbar>
						<Breadcrumbs>
							<Breadcrumb to="/">freddieridell.com</Breadcrumb>
						</Breadcrumbs>
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
		)}
	</Location>
);

export default withTheme(Layout);
