import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { mix } from "polished";
import { StaticQuery, graphql, Link } from "gatsby";
import { calm } from "@freddieridell/little-bonsai-styles";

import { smallerThan } from "../../util";

import zIndecies from "../zIndex";
import hideHeaderOnScroll from "./hideHeaderOnScroll";

//////////////////////////////
// Header
//////////////////////////////
const headerStylesShared = calm({

	alignItems: "center",
	display: "flex",
	justifyContent: "center",

	height: R.path(["theme", "size", "space", 6]),
	maxHeight: R.path(["theme", "size", "space", 6]),
	minHeight: R.path(["theme", "size", "space", 6]),
	padding: R.path(["theme", "size", "space", 3]),
	paddingTop: R.path(["theme", "size", "space", 5]),

	backgroundColor: R.path(["theme", "color", "symantic", "background"]),

	fontSize: R.path(["theme", "size", "font", 3]),
	textDecoration: "none",

	[smallerThan("350px")]: {
		fontSize: R.path(["theme", "size", "font", 2]),
	},
	[smallerThan("270px")]: {
		fontSize: R.path(["theme", "size", "font", 1]),
	},
	[smallerThan("200px")]: {
		fontSize: R.path(["theme", "size", "font", 0]),
	},
});

const HeaderStyled = styled.header(
	headerStylesShared,
	calm({
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,

		zIndex: zIndecies["header"],

		transitionDuration: R.path(["theme", "time", "normal"]),
		transitionProperty: "all",
		transform: R.ifElse(
			R.prop("hidden"),
			R.always("translateY(-100%)"),
			R.always("translateY(0)"),
		),
	}),
);

const HeaderSpacer = styled.div(headerStylesShared);

//////////////////////////////
// Nav
//////////////////////////////
const NavContainer = styled.nav(
	calm({
		alignItems: "flex-end",
		display: "flex",
		position: "relative",

		maxWidth: R.path(["theme", "size", "paragraphWidth"]),
		width: R.path(["theme", "size", "paragraphWidth"]),

		"&::before": {
			content: '""',

			bottom: R.pipe(
				R.path(["theme", "size", "space", 1]),
				x => `-${x}`,
			),
			height: R.path(["theme", "size", "space", 1]),
			left: 0,
			position: "absolute",
			right: 0,

			backgroundColor: R.pipe(
				R.path(["theme", "color", "symantic"]),
				cols => mix(1 / 4, cols.text, cols.inverted.text),
			),
		},
	}),
);

//////////////////////////////
// Links
//////////////////////////////
const linkStylesShared = calm({
	display: "block",
	flexBasis: "auto",
	flexShrink: 0,
	position: "relative",

	paddingLeft: R.path(["theme", "size", "space", 1]),
	paddingRight: R.path(["theme", "size", "space", 1]),

	textTransform: "capitalize",
	color: R.path(["theme", "color", "symantic", "text"]),

	"&::after": {
		content: '""',

		bottom: R.pipe(
			R.path(["theme", "size", "space", 1]),
			x => `-${x}`,
		),
		height: R.path(["theme", "size", "space", 1]),
		left: 0,
		maxWidth: R.path(["theme", "size", "space", 11]),
		position: "absolute",
		right: 0,

		backgroundColor: R.path(["theme", "color", "symantic", "text"]),

		transform: "scaleX(0)",
		transformOrigin: "left",
		transitionDuration: R.path(["theme", "time", "slow"]),
		transitionProperty: "all",
		transitionTimingFunction: "ease",
	},
	"&.active::after": {
		transform: "scaleX(1)",
	},
});

const SiteHomeLink = styled(Link)(linkStylesShared, {
	flexGrow: 8,
});

const SiteNavLink = styled(Link)(linkStylesShared, {
	flexGrow: 1,
});

//////////////////////////////
// Component
//////////////////////////////
const navLinksQuery = graphql`
	query {
		allSitePage(filter: { context: { listing: { eq: true } } }) {
			edges {
				node {
					path
				}
			}
		}
	}
`;

const getNavLinks = R.pipe(
	R.path(["allSitePage", "edges"]),
	R.map(R.path(["node", "path"])),
	R.filter(slug => (slug.match(/\//g) || []).length === 2),
	R.sortBy(R.identity),
	R.map(slug => ({
		slug,
		label: slug.replace(/\//g, "").replace("-", " "),
	})),
);

const Header = () => {
	const hidden = hideHeaderOnScroll();

	return (
		<StaticQuery
			query={navLinksQuery}
			render={data => (
				<React.Fragment>
					<HeaderStyled hidden={hidden}>
						<NavContainer>
							<SiteHomeLink to="/" activeClassName="active">
								Home
							</SiteHomeLink>
							{getNavLinks(data).map(({ slug, label }) => (
								<SiteNavLink
									to={slug}
									activeClassName="active"
									partiallyActive
								>
									{label}
								</SiteNavLink>
							))}
						</NavContainer>
					</HeaderStyled>
					<HeaderSpacer />
				</React.Fragment>
			)}
		/>
	);
};

export default Header;
