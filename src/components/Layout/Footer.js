import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";
import { getYear } from "date-fns";

const FooterStyled = styled.footer(
	calm({
		fontSize: R.path(["theme", "size", "font", 2]),
		padding: R.path(["theme", "size", "space", 1]),
		paddingLeft: R.path(["theme", "size", "space", 2]),
		paddingRight: R.path(["theme", "size", "space", 2]),

		color: R.path(["theme", "color", "symantic", "inverted", "text"]),
		backgroundColor: R.path([
			"theme",
			"color",
			"symantic",
			"inverted",
			"background",
		]),
	}),
);

const FooterTitle = styled.h4(
	calm({
		padding: R.path(["theme", "size", "space", 1]),
		paddingTop: R.path(["theme", "size", "space", 2]),
	}),
);
const FooterSection = styled.section(
	calm({
		padding: R.path(["theme", "size", "space", 1]),
		paddingLeft: R.path(["theme", "size", "space", 3]),
	}),
);

const Footer = () => (
	<FooterStyled>
		<FooterTitle>Footer</FooterTitle>
		<FooterSection>
			email:{" "}
			<a href="mailto:contact@freddieridell.com">
				contact@freddieridell.com
			</a>
		</FooterSection>
		<FooterSection>
			phone: <a href="tel:+447720 510951">+447720 510951</a>
		</FooterSection>
		<FooterSection>
			twitter:{" "}
			<a href="https://twitter.com/FreddieRidell">@FreddieRidell</a>
		</FooterSection>
		<FooterSection>
			github:{" "}
			<a href="https://github.com/FreddieRidell">~FreddieRidell</a>
		</FooterSection>
		<FooterSection>
			© Ya' boi Freddie Ridell {getYear(new Date())}
		</FooterSection>
	</FooterStyled>
);

export default Footer;
