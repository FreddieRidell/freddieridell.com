import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const MainStyled = styled.main(
	calm({
		display: "flex",
		flex: 1,
		flexDirection: "column",
		padding: R.path(["theme", "size", "space", 2]),
	}),
);

const Main = ({ children }) => <MainStyled>{children}</MainStyled>;

export default Main;
