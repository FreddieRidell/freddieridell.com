import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";

const sharedFooterStyles = R.applySpec({
	backgroundColor: R.path(["theme", "color", "symantic", "background"]),
	fontSize: R.path(["theme", "size", "font", 2]),
	padding: R.path(["theme", "size", "space", 0]),
	width: "100%",
});

const FooterStyled = styled.footer(sharedFooterStyles, {
	position: "fixed",
	bottom: 0,
	left: 0,
	right: 0,
});

const FooterSpacer = styled.div(sharedFooterStyles);

const Footer = () => (
	<React.Fragment>
		<FooterStyled>footer</FooterStyled>
		<FooterSpacer>___</FooterSpacer>
	</React.Fragment>
);

export default Footer;
