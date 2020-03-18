import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";
import { Link } from "gatsby";

const BioStyled = styled.section(
	calm({
		alignSelf: "flex-start",
		paddingTop: R.path(["theme", "size", "space", 3]),
		fontSize: R.path(["theme", "size", "font", 3]),

		//"@media print": {
		//display: "none",
		//},
	}),
);

const Bio = () => (
	<BioStyled>
		Having worked with JavaScript and React for the last 5 years in a
		variety of teams and settings I've gained expertise across the stack to
		help me ship performant apps with clean code bases. Throughout my career
		I've been responsible for leading, training, and managing fellow
		developers, in addition to directly writing code. I'm currently looking
		for new opportunities to deliver value and drive progress for your
		product.
	</BioStyled>
);

export default Bio;
