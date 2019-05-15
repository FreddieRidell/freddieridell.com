import React from "react";
import styled from "@emotion/styled";

const MainStyled = styled.main({
	flex: 1,
});

const Main = ({ children }) => <MainStyled>{children}</MainStyled>;

export default Main;
