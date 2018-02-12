import React from "react";

import GatsbyLink from "gatsby-link";
import system from "system-components";

export const Link = system({
	is: GatsbyLink,
	fontSize: 1,
	color: "black",
});

export const SilentLink = system({
	is: GatsbyLink,
	fontSize: 1,
	color: "black",
}).extend`
	text-decoration: none;
`;
