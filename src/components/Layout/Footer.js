import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const FooterStyled = styled.footer(
	calm({
		fontSize: R.path(["theme", "size", "font", 2]),
		padding: R.path(["theme", "size", "space", 1]),
		paddingLeft: R.path(["theme", "size", "space", 2]),
		paddingRight: R.path(["theme", "size", "space", 2]),

		color: R.path(["theme", "color", "symantic", "inverted", "text"]),
		backgroundColor: R.path(["theme", "color", "symantic", "inverted", "background"]),
	}),
);

const Footer = () => (
	<React.Fragment>
		<FooterStyled>footer</FooterStyled>
	</React.Fragment>
);

export default Footer;
