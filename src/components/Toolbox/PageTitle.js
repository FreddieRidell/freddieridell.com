import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import Spacer from "./Spacer";

const PageTitleStyled = styled.h1(
	calm({
		textTransform: "capitalize",
		paddingLeft: R.path(["theme", "size", "space", 2]),
	}),
);

const PageTitle = ({ children }) => (
	<React.Fragment>
		<Spacer height={3} />
		<PageTitleStyled>{children}</PageTitleStyled>
	</React.Fragment>
);

export default PageTitle;
