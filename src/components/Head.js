import React, { Fragment } from "react";
import * as R from "ramda";
import Helmet from "react-helmet";
import styled, { withTheme, ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import PrisimStyle from "./PrisimStyle";

const Head = ({ title, description, keywords }) => (
	<Fragment>
		<Helmet>
			<title>
				{title ? `${title} - FreddieRidell.com` : "FreddieRidell.com"}
			</title>
			<meta
				name="description"
				content={`${description} - freddieridell.com`}
			/>
			<meta name="keywords" content={(keywords || []).join(", ")} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<html lang="en" />
		</Helmet>
		<GlobalStyle />
		<PrisimStyle />
	</Fragment>
);

export default Head;
