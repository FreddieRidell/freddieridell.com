import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";

const headerStylesShared = [
	{ display: "flex", justifyContents: "center" },
	R.applySpec({
		backgroundColor: R.path(["theme", "color", "symantic", "background"]),
		fontSize: R.path(["theme", "size", "font", 3]),
		padding: R.path(["theme", "size", "space", 0]),
		paddingTop: R.path(["theme", "size", "space", 1]),
		paddingBottom: R.path(["theme", "size", "space", 1]),
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
	{ display: "flex", margin: "auto" },
	R.applySpec({
		maxWidth: R.path(["theme", "size", "paragraphWidth"]),
		width: R.path(["theme", "size", "paragraphWidth"]),
	}),
);

const linkStylesShared = [
	R.applySpec({
		paddingLeft: R.path(["theme", "size", "space", 0]),
		paddingRight: R.path(["theme", "size", "space", 0]),
		color: R.path(["theme", "color", "symantic", "link"]),
	}),
];

const SiteName = styled.a(
	...linkStylesShared,
	{
		flex: 1,
	},
	R.applySpec({}),
);

const SiteNavLink = styled.a(...linkStylesShared);

const Header = () => (
	<React.Fragment>
		<HeaderStyled>
			<NavContainer>
				<SiteName href="/">Home</SiteName>
				<SiteNavLink href="/blog">Blog</SiteNavLink>
				<SiteNavLink href="/crafts">Crafts</SiteNavLink>
				<SiteNavLink href="/open-source">OpenSource</SiteNavLink>
			</NavContainer>
		</HeaderStyled>
		<HeaderSpacer>___</HeaderSpacer>
	</React.Fragment>
);

export default Header;
