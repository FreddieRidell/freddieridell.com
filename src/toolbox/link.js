import React from "react";

import GatsbyLink from "gatsby-link";
import system from "system-components";

export const LinkInternal = system({
	is: GatsbyLink,
	fontSize: 1,
	color: "black",
});

export const Link = props => {
	console.log("Link", props);
	return <LinkInternal { ...props } />;
};

export const SilentLinkInternal = system({
	is: GatsbyLink,
	fontSize: 1,
	color: "black",
}).extend`
	text-decoration: none;
`;

export const SilentLink = props => {
	console.log("SilentLink", props);

	return <SilentLinkInternal { ...props } />;
};
