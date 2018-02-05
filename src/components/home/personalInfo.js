import React from "react";

import Link from "gatsby-link";
import styled from "styled-components";
import system from "system-components";

import { Icon, Section, H1, } from "../../toolbox";

const Bio = styled.p`
	font-style: italic;
	font-size: 2.5rem;
`;

const ContactsContainer = system({
	justify: "space-around",
	my: 1,
}).extend`
	display: flex;
`;

const Contact = system({
	is: Link,
	color: "grey",
});

const ContactDetails = () => (
	<ContactsContainer>
		{[
			{
				to: "mailto:freddie.ridell@gmail.com",
				name: "mail",
			},
			{
				to: "https://twitter.com/FreddieRidell",
				name: "twitter",
			},
			{
				to: "tel:+447521160572",
				name: "phone",
			},
			{
				to: "https://github.com/CodogoFreddie",
				name: "github",
			},
		].map(({ to, name, }) => (
			<Contact to = { to } key = { to }>
				<Icon name = { name } />
			</Contact>
		))}
	</ContactsContainer>
);

export default () => (
	<Section>
		<H1>Freddie Ridell</H1>

		<Bio>
			Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising
			in React.js and React Native. I'm currently looking for new
			oportunities as a contractor in London.
		</Bio>

		<ContactDetails />
	</Section>
);
