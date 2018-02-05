import React from "react";

import styled from "styled-components";
import system from "system-components";
import feather from "feather-icons";

const IconStlyed = system({
	is: "svg",
	w: 32,
}).extend`
	display: block;
`;

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

export const H1 = system({
	is: "h1",
	fontSize: 4,
	mt: 2,
	mb: 1,
});

export const H2 = system({
	is: "h2",
	fontSize: 3,
	mt: 2,
	mb: 1,
});

export const H3 = system({
	is: "h3",
	fontSize: 2,
	mt: 2,
	mb: 1,
});

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

export const Hr = styled.hr`
	background: black;
	border: 0;
	height: 1px;
	max-width: 100%;
	width: 100%;
	margin: 1rem 0;
`;

const SectionContainer = system({
	is: "section",
	my: 4,
});

export const Section = ({ title, children, }) => (
	<SectionContainer>
		{title && (
			<heading>
				<H2> {title} </H2>
			</heading>
		)}

		{children}

		<Hr />
	</SectionContainer>
);
