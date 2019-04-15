import React, { Fragment } from "react";
import * as R from "ramda";
import { Link } from "@reach/router";
import styled, { withTheme, ThemeProvider } from "styled-components";

import theme from "../theme";
import { smol } from "../../util";
import Head from "../Head";
import WebRing from "../WebRing";

const Topbar = styled.header`
	background-color: ${R.path(["theme", "color", "black"])};
	color: ${R.path(["theme", "color", "bg"])};
	padding: ${R.path(["theme", "size", "space", 0])};
	display: flex;
	flex-shrink: 0;
`;

const HomeLink = styled.div`
	flex: 1;
`;

const NavLink = styled(Link)`
	color: ${R.path(["theme", "color", "white"])};
	margin-left: ${R.path(["theme", "size", "space", 1])};
	text-transform: capitalize;
`;


export default ({ navLinks }) => (
	<Topbar>
		<HomeLink>
			<NavLink to="/">home</NavLink>
		</HomeLink>
		{navLinks.map(({ slug, label }) => (
			<NavLink to={slug}>{label}</NavLink>
		))}
	</Topbar>
);
