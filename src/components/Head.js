import React, { Fragment } from "react";
import * as R from "ramda";
import Helmet from "react-helmet";
import styled, { withTheme, ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import PrisimStyle from "./PrisimStyle";

const Head = ({ title, description, keywords, theme }) => (
	<Fragment>
		<Helmet>
			<html lang="en" />
			<meta name="description" content={`${description} - freddieridell.com`} />
			<meta name="keywords" content={(keywords || []).join(", ")} />
			<meta name="rating" content="General" /> 
			<meta name="subject" content={description} /> 
			<meta name="theme-color" content={theme.color.black} /> 
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="@freddieRidell" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:site" content="@freddieRidell" />
			<meta name="twitter:title" content={title} />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta property="article:author" content="Freddie Ridell" />
			<meta property="og:description" content={description} />
			<meta property="og:locale" content="en_GB" />
			<meta property="og:site_name" content="FreddieRidell.com" />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<title> {title ? `${title} - FreddieRidell.com` : "FreddieRidell.com"} </title>
			{/*
<meta name="twitter:image" content="https://example.com/image.jpg">
<meta property="og:image" content="https://example.com/image.jpg">
<meta name="twitter:url" content="https://example.com/page.html">
<meta property="og:url" content="https://example.com/page.html">
		<meta itemprop="name" content={title}/>
		  <meta itemprop="description" content={description}/>
*/}
		</Helmet>
		<GlobalStyle />
		<PrisimStyle />
	</Fragment>
);

export default withTheme(Head);
