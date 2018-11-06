import React, { Fragment } from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location, Link } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

import "./layout.css";
import theme from "./theme";

const Topbar = styled.div`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "white"])};
	padding: ${R.path(["theme", "size", "space", 0])};
	display: flex;
`;

const Breadcrumbs = styled.div`
	flex: 1;
`;

const Breadcrumb = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	::after {
		margin: ${R.path(["theme", "size", "space", 0])};
		content: "/";
	}
`;

const NavLink = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	margin-left :${R.path(["theme", "size", "space", 1])};
	text-transform: capitalize;
`;

const Title = styled.div`
	text-transform: capitalize;
	font-size: ${R.path(["theme", "size", "fontSize", 3, ])};
	margin: ${R.path(["theme", "size", "space", 0])} ${R.path(["theme", "size", "space", 2])};
`;

const ChildrenContainer = styled.div`
	flex: 1;
	align-self: center;
	max-width: 70rem;
	width: 70rem;
`;

const Footer = styled.div`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "white"])};
	padding: ${R.path(["theme", "size", "space", 0])};
`;

const Layout = ({ children, title, navLinks = [], ...props }) => (
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
					<Helmet
						title="FreddieRidell.com"
						meta={[
							{ name: "description", content: "Sample" },
							{ name: "keywords", content: "sample, something" }
						]}
					>
						<html lang="en" />
					</Helmet>
					<Topbar>
						<Breadcrumbs>
							{breadcrumb.map( ({ path, label }) => (
								<Fragment key = { path } >
									<Breadcrumb to = { path } >{label}</Breadcrumb>
								</Fragment>
							))}
						</Breadcrumbs>
						{ navLinks.map( ({slug, label}) => (
							<NavLink to = {slug}>{label}</NavLink>
						))}
					</Topbar>
					<Title>{title}</Title>
					<ChildrenContainer>
						{children}
					</ChildrenContainer>
					<Footer>©Ya' boi Freddie Ridell {new Date().toISOString()}</Footer>
				</Fragment>
			</ThemeProvider>
		);
	}}
</Location>
);

export default Layout;
