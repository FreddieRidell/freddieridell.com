import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import Spacer from "./Spacer";

const PageTitleStyled = styled.h1(
	calm({
		textTransform: "capitalize",

		"@media print": {
			display: ({ hideOnPrint }) => (hideOnPrint ? "none" : undefined),
		},
		"@media screen": {
			display: ({ showOnPrint }) => (showOnPrint ? "none" : undefined),
			paddingLeft: R.path(["theme", "size", "space", 2]),
		},
	}),
);

const PageTitle = ({ children, hideOnPrint, showOnPrint }) => (
	<React.Fragment>
		<Spacer height={3} />
		<PageTitleStyled hideOnPrint={hideOnPrint} showOnPrint={showOnPrint}>
			{children}
		</PageTitleStyled>
	</React.Fragment>
);

export default PageTitle;
