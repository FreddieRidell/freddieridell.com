import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { withTheme } from "emotion-theming";

const Head = ({ title, description, keywords, theme }) => {
	const desc = description
		? `${description} - FreddieRidell.com`
		: "FreddieRidell.com";
	return (
		<Fragment>
			<Helmet>
				<html lang="en" />
				<meta name="description" content={desc} />
				<meta name="keywords" content={(keywords || []).join(", ")} />
				<meta name="rating" content="General" />
				<meta name="subject" content={desc} />
				<meta name="theme-color" content={theme.color.black} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@freddieRidell" />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@freddieRidell" />
				<meta name="twitter:title" content={title} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta property="article:author" content="Freddie Ridell" />
				<meta property="og:description" content={desc} />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:site_name" content="FreddieRidell.com" />
				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<title>
					{title
						? `${title} - FreddieRidell.com`
						: "FreddieRidell.com"}
				</title>
			</Helmet>
		</Fragment>
	);
};

export default withTheme(Head);
