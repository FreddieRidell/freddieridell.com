import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { StaticQuery, graphql, Link } from "gatsby";
import { adjustRadience } from "@freddieridell/little-bonsai-styles";

const headerStylesShared = [
	{
		display: "flex",
		justifyContents: "center",
		textDecoration: "none",
	},
	R.applySpec({
		backgroundColor: R.path(["theme", "color", "symantic", "background"]),
		fontSize: R.path(["theme", "size", "font", 3]),
		padding: R.path(["theme", "size", "space", 1]),
		paddingTop: R.path(["theme", "size", "space", 2]),
		paddingBottom: R.path(["theme", "size", "space", 2]),
	}),
];

const HeaderStyled = styled.header(...headerStylesShared, {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
});

const HeaderSpacer = styled.div(...headerStylesShared);

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
			backgroundColor: R.path(["theme", "color", "symantic", "link"]),
			bottom: R.pipe(
				R.path(["theme", "size", "space", 1]),
				x => `-${x}`,
			),
			height: R.path(["theme", "size", "space", 1]),
		},
	}),
);

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
		paddingLeft: R.path(["theme", "size", "space", 2]),
		paddingRight: R.path(["theme", "size", "space", 2]),
		color: R.path(["theme", "color", "symantic", "text"]),

		"&::after": {
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

const SiteHomeLink = styled(Link)(
	...linkStylesShared,
	{
		flex: 1,
	},
	R.applySpec({}),
);

const SiteNavLink = styled(Link)(...linkStylesShared);

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
				<HeaderSpacer>___</HeaderSpacer>
			</React.Fragment>
		)}
	/>
);

export default Header;
