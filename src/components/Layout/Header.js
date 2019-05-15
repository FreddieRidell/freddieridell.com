import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { Link } from "gatsby"
import { adjustRadience } from '@freddieridell/little-bonsai-styles';

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
		color: adjustRadience(-0.2, ["theme", "color", "symantic", "link"]),
	}),
];

const SiteName = styled(Link)(
	...linkStylesShared,
	{
		flex: 1,
	},
	R.applySpec({}),
);

const SiteNavLink = styled(Link)(...linkStylesShared);

const Header = () => (
	<React.Fragment>
		<HeaderStyled>
			<NavContainer>
				<SiteName to="/">Home</SiteName>
				<SiteNavLink to="/blog">Blog</SiteNavLink>
				<SiteNavLink to="/crafts">Crafts</SiteNavLink>
				<SiteNavLink to="/open-source">OpenSource</SiteNavLink>
			</NavContainer>
		</HeaderStyled>
		<HeaderSpacer>___</HeaderSpacer>
	</React.Fragment>
);

export default Header;
