import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const MainStyled = styled.main(calm({
	flex: 1,
	padding: R.path(["theme", "size", "space", 1]),
}));

const Main = ({ children }) => <MainStyled>{children}</MainStyled>;

export default Main;
