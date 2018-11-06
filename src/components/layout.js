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
`;

const Title = styled.div`
  text-transform: capitalize;
`;

const ChildrenContainer = styled.div`
	flex: 1;
`;

const Footer = styled.div`
  background-color: ${R.path(["theme", "color", "black"])};
  color: ${R.path(["theme", "color", "white"])};
`;

const Layout = ({ children, title, ...props }) => (
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
						<NavLink to = "/blog">Blog</NavLink>
						<NavLink to = "/crafts">Crafts</NavLink>
						<NavLink to = "/open-source">Open Source</NavLink>
			</Topbar>
				<Title>{title}</Title>
				<ChildrenContainer>
					{children}
				</ChildrenContainer>
				<Footer>©Ya' boi Freddie {new Date().toISOString()}</Footer>
			</Fragment>
		</ThemeProvider>
		);
	}}
</Location>
);

export default Layout;

export const query = graphql`
query{
  allSitePage{
    edges{
      node{
        path
      }
    }
  }
}
`
