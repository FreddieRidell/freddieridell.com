import React, { Fragment } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location, Link } from "@reach/router";
import styled, {
	withTheme,
	ThemeProvider,
	createGlobalStyle,
} from "styled-components";

import theme from "./theme";
import GlobalStyle from "./GlobalStyle";

const Topbar = styled.header`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "white"])};
	padding: ${R.path(["theme", "size", "space", 0])};
	display: flex;
`;

const Breadcrumbs = styled.div`
	flex: 1;
	background-color: ${R.path(["theme", "color", "black"])};
`;

const Breadcrumb = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	::after {
		margin: ${R.path(["theme", "size", "space", 0])};
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
	padding: ${R.path(["theme", "size", "space", 1])};
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
		{({ location }) => {
			const breadcrumb = location.pathname
				.split("/")
				.filter(R.length)
				.reduce(
					(acc, val) => [
						...acc,
						{
							path: ((R.last(acc) || {}).path || "") + "/" + val,
							label: val,
						},
					],
					[
						{
							path: "",
							label: "freddie",
						},
					],
				);

			return (
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
								content={`${description} on freddieridell.com`}
							/>
							<meta
								name="keywords"
								content={keywords.join(", ")}
							/>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1, shrink-to-fit=no"
							/>
							<html lang="en" />
						</Helmet>
						<GlobalStyle />
						<Topbar>
							<Breadcrumbs>
								{breadcrumb.map(({ path, label }) => (
									<Fragment key={path}>
										<Breadcrumb to={path}>
											{label}
										</Breadcrumb>
									</Fragment>
								))}
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
			);
		}}
	</Location>
);

export default withTheme(Layout);
