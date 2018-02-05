import React from "react";

import styled from "styled-components";
import system from "system-components";

import { Icon, Section, H1, } from "../../toolbox";

const Bio = styled.p`
	font-style: italic;
	font-size: 2.5rem;
`;

const ContactsContainer = system({
	mb: 1,
	flex: 1,
	align: "flex-end",
	justify: ["flex-start", "flex-end",],
}).extend`
	display: flex;
`;

const Contact = system({
	is: "a",
	pl: [0, 2,],
	pr: [2, 0,],
	color: "grey",
	hover: {
		color: "black",
	},
	active: {
		color: "black",
	},
}).extend`
	transition: all, 0.5s;
`;

const ContactDetails = () => (
	<ContactsContainer>
		{[
			{
				title: "email",
				href: "mailhref:freddie.ridell@gmail.com",
				name: "mail",
			},
			{
				title: "twitter",
				href: "https://twitter.com/FreddieRidell",
				name: "twitter",
			},
			{
				title: "phone",
				href: "tel:+447521160572",
				name: "phone",
			},
			{
				title: "github",
				href: "https://github.com/CodogoFreddie",
				name: "github",
			},
		].map(({ href, name, title, }) => (
			<Contact title = { title } href = { href } key = { href }>
				<Icon name = { name } />
			</Contact>
		))}
	</ContactsContainer>
);

const NameAndDeets = system({
	flexDirection: ["column", "row",],
}).extend`
	display: flex;
`;

export default () => (
	<Section>
		<NameAndDeets>
			<H1>Freddie Ridell</H1>
			<ContactDetails />
		</NameAndDeets>

		<Bio>
			Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising
			in React.js and React Native. I'm currently looking for new
			oportunities as a contractor in London.
		</Bio>
	</Section>
);
