import React from "react";

import Helmet from "react-helmet";
import Link from "gatsby-link";
import "normalize.css";
import PropTypes from "prop-types";
import R from "ramda";
import styled, { ThemeProvider, } from "styled-components";
import { space, } from "styled-system";
import system from "system-components";

import "./index.css";

const AppWrapper = system({
	align: "center",
	flexDirection: "column",
	justify: "center",
	width: "100%",
}).extend`
	display: flex;
`;

const ContentPane = system({
	mb: "50vh",
	width: "100%",
	px: 2,
}).extend`
	max-width: 70rem;
	min-width: 40rem;
`;

const BreadcrumbContainer = styled.div`
	flex-flow: row wrap;
	display: flex;
	background-color: black;
	width: 100%;
	${space};
`;

const BreadcrumbLink = system({
	is: Link,
	color: "white",
	fontWeight: "bold",
});

const BreadcrumbSeperator = system({
	color: "white",
	px: 1,
});

const Header = ({ location, }) => {
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
		<BreadcrumbContainer p = { 2 }>
			{breadcrumb.map(({ path, label, }) => [
				<BreadcrumbLink to = { path + "/" }>{label}</BreadcrumbLink>,
				<BreadcrumbSeperator>/</BreadcrumbSeperator>,
			])}
		</BreadcrumbContainer>
	);
};

const theme = {
	breakpoints: [32, 48, 64,],
	space: [0, 8, 16, 24, 32,],
	fontSizes: [12, 16, 18, 24, 36, 72,],
	colors: {
		black: "#111",
		white: "#fff",
		gray: "#666",
		lightgray: "#ddd",
	},
};

const TemplateWrapper = ({ children, ...props }) => (
	<ThemeProvider theme = { theme }>
		<AppWrapper>
			<Helmet>
				<title>Freddie Ridell</title>
			</Helmet>

			<Header { ...props } />

			<ContentPane>{children()}</ContentPane>
		</AppWrapper>
	</ThemeProvider>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
