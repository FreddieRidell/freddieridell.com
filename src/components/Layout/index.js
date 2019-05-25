import React from "react";
import { ThemeProvider } from "emotion-theming";

import "./reset.css";
import theme from "../../theme";

import Spacer from "../Toolbox/Spacer";

import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Head from "./Head";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<React.Fragment>
			<GlobalStyles />
			<Head />
			<Header title="title" />
			<Main>{children}</Main>
			<Spacer height={7} />
			<Footer />
		</React.Fragment>
	</ThemeProvider>
);

export default Layout;
