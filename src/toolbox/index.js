import React from "react";

import system from "system-components";
import feather from "feather-icons";

export * from "./headings";
export { default as Hr, } from "./horizontalRule";
export { default as Section, } from "./section";

const IconStlyed = system({
	is: "svg",
	w: 24,
});

export const Icon = ({ name, attrs, ...props }) => (
	<IconStlyed
		{ ...props }
		xmlns = "http://www.w3.org/2000/svg"
		viewBox = "0 0 24 24"
		fill = "none"
		stroke = "currentColor"
		strokeWidth = { 2 }
		strokeLinecap = "round"
		strokeLinejoin = "round"
		dangerouslySetInnerHTML = { { __html: feather.icons[name].toString(), } }
	/>
);

export const RegularPadding = system({
	fontSize: 1,
	my: 1,
});

export const P = RegularPadding.withComponent("p");

const List = system({
	fontSize: 1,
	my: 1,
	pl: 2,
});

export const Ul = List.withComponent("ul");

export const Ol = List.withComponent("ol");

export const Note = system({
	fontSize: 1,
	my: 1,
	color: "gray",
});
