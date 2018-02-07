import React from "react";

import R from "ramda";
import GatsbyLink from "gatsby-link";
import styled, { ThemeProvider, } from "styled-components";
import { space, } from "styled-system";
import system from "system-components";

const Topbar = system({
	bg: "black",
	width: 1,
	p: 2,
}).extend`
	display: flex;
`;

const BreadcrumbContainer = system({
	flex: 1,
}).extend`
	flex-flow: row wrap;
	display: flex;
`;

const SitemapContainer = system({
	flexDirection: ["column", "row",],
	align: "flex-end",
}).extend`
	display: none;
`;

const Link = system({
	is: GatsbyLink,
	color: "white",
	fontWeight: "bold",
	mr: 1
});

const Seperator = system({
	color: "white",
	pr: 1,
});

export default ({ location, }) => {
	console.log(location);
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
		<Topbar>
			<BreadcrumbContainer>
				{breadcrumb.map(({ path, label, }) => [
					<Link to = { path + "/" }>{label}</Link>,
					<Seperator>/</Seperator>,
				])}
			</BreadcrumbContainer>

			<SitemapContainer>
				<Link to = "/blog" >Blog</Link>
				<Link to = "/crafty" >Crafts</Link>
				<Link to = "/open-source" >Open Source</Link>
			</SitemapContainer>
		</Topbar>
	);
};

