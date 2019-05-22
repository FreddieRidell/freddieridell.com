import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { mix } from "polished";
import { StaticQuery, graphql, Link } from "gatsby";
import { adjustRadience } from "@freddieridell/little-bonsai-styles";

//////////////////////////////
// Header
//////////////////////////////
const headerStylesShared = [
	{
		display: "flex",
		justifyContents: "center",
		textDecoration: "none",
	},
	R.applySpec({
		backgroundColor: R.path(["theme", "color", "symantic", "background"]),
		fontSize: R.path(["theme", "size", "font", 3]),
		height: R.path(["theme", "size", "space", 7]),
		minHeight: R.path(["theme", "size", "space", 7]),
		maxHeight: R.path(["theme", "size", "space", 7]),
		padding: R.path(["theme", "size", "space", 2]),
	}),
];

const HeaderStyled = styled.header(...headerStylesShared, {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
});

const HeaderSpacer = styled.div(...headerStylesShared);

//////////////////////////////
// Nav
//////////////////////////////
const NavContainer = styled.nav(
	{
		display: "flex",
		margin: "auto",
		position: "relative",

		"&::before": {
			bottom: 0,
			content: '""',
			left: 0,
			position: "absolute",
			right: 0,
		},
	},
	R.applySpec({
		maxWidth: R.path(["theme", "size", "paragraphWidth"]),
		width: R.path(["theme", "size", "paragraphWidth"]),

		"&::before": {
			backgroundColor: R.pipe(
				R.path(["theme", "color", "symantic"]),
				cols => mix(1 / 4, cols.text, cols.inverted.text),
			),
			bottom: R.pipe(
				R.path(["theme", "size", "space", 1]),
				x => `-${x}`,
			),
			height: R.path(["theme", "size", "space", 1]),
		},
	}),
);

function foo(x) {
	return R.pipe(
		R.map(spec => {
			switch (typeof spec) {
				case "function":
					return spec;
				case "object":
					return foo(spec);
				default:
					return R.allways(spec);
			}
		}),
		R.applySpec,
	)(x);
}

//////////////////////////////
// Links
//////////////////////////////
const linkStylesShared = [
	{
		textTransform: "capitalize",
		position: "relative",

		"&::after": {
			bottom: 0,
			content: '""',
			left: 0,
			position: "absolute",
			right: 0,
			transformOrigin: "left",
			transform: "scaleX(0)",
			transitionProperty: "all",
			transitionTimingFunction: "ease",
		},
		"&.active::after": {
			transform: "scaleX(1)",
		},
	},
	R.applySpec({
		paddingLeft: R.path(["theme", "size", "space", 1]),
		paddingRight: R.path(["theme", "size", "space", 1]),
		color: R.path(["theme", "color", "symantic", "text"]),

		"&::after": {
			maxWidth: R.path(["theme", "size", "space", 11]),
			backgroundColor: R.path(["theme", "color", "symantic", "text"]),
			bottom: R.pipe(
				R.path(["theme", "size", "space", 1]),
				x => `-${x}`,
			),
			height: R.path(["theme", "size", "space", 1]),
			transitionDuration: R.path(["theme", "time", "normal"]),
		},
	}),
];

const SiteHomeLink = styled(Link)(...linkStylesShared, {
	flex: 1,
});

const SiteNavLink = styled(Link)(...linkStylesShared);

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

const Header = () => (
	<StaticQuery
		query={navLinksQuery}
		render={data => (
			<React.Fragment>
				<HeaderStyled>
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

export default Header;
