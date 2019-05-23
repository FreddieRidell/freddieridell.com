import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const FooterStyled = styled.footer(
	calm({
		bottom: 0,
		fontSize: R.path(["theme", "size", "font", 2]),
		left: 0,
		padding: R.path(["theme", "size", "space", 0]),
		position: "fixed",
		right: 0,
		width: "100%",

		backgroundColor: R.path(["theme", "color", "symantic", "background"]),
	}),
);

const Footer = () => (
	<React.Fragment>
		<FooterStyled>footer</FooterStyled>
	</React.Fragment>
);

export default Footer;
