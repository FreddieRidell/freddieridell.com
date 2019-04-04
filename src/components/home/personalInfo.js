import React from "react";
import * as R from "ramda";
import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";

import githubIcon from "feather-icons/dist/icons/github.svg";
import mailIcon from "feather-icons/dist/icons/mail.svg";
import phoneIcon from "feather-icons/dist/icons/phone.svg";
import twitterIcon from "feather-icons/dist/icons/twitter.svg";

const Bio = styled.p`
	grid-column: left / right;
	font-style: italic;
	font-size: 2.5rem;
	@media print {
		display: none;
	}
`;

const ContactsContainer = styled.div`
	grid-column: left / right;
	margin-bottom: ${R.path(["theme", "size", "space", 1])};
	display: flex;
	flex: 1;
	align-items: flex-end;
	justify-content: space-evenly;
	flex-direction: row;
	@media print {
		flex-direction: column;
		align-items: flex-end;
	}
`;

const contactSlideIn = props => keyframes`
	from { 
		background-color: ${R.pipe(
			R.path(["theme", "color", "black"]),
			transparentize(1.0),
		)(props)};
	}
	to { 
		background-color: ${R.pipe(
			R.path(["theme", "color", "black"]),
			transparentize(0.0),
		)(props)};
	}
`;

const Contact = styled.a`
	display: flex;
	flex: 1;
	align-items: center;
	transition: all, 0.5s;
	min-width: ${R.path(["theme", "size", "fontSize", 3])};
	min-height: ${R.path(["theme", "size", "fontSize", 3])};
	mask: url(${R.prop("icon")});
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center center;
	background-color: ${R.path(["theme", "color", "black"])};
	animation: ${contactSlideIn} 1s ${({ i }) => i / 6}s ease both;

	@media print {
		text-decoration: none;
		${({ print }) => (print ? "" : "display: none;")}
	}
`;

const ContactText = styled.p`
	display: none;
	@media print {
		display: block;
	}
`;

const ContactDetails = () => (
	<ContactsContainer>
		{[
			{
				title: "email",
				href: "mailhref:contact@freddieridell.com",
				name: "mail",
				text: "contact@freddieridell.com",
				print: true,
				icon: mailIcon,
			},
			{
				title: "twitter",
				href: "https://twitter.com/FreddieRidell",
				name: "twitter",
				text: "@FreddieRidell",
				icon: twitterIcon,
			},07720510951
			{
				title: "phone",
				href: "tel:+447720510951",
				name: "phone",
				text: "+44 7720 510951",
				print: true,
				icon: phoneIcon,
			},
			{
				title: "github",
				href: "https://github.com/FreddieRidell",
				name: "github",
				text: "CodogoFreddie",
				icon: githubIcon,
			},
		].map(({ href, name, title, text, print, icon }, i) => (
			<Contact
				i={i}
				title={title}
				href={href}
				key={href}
				print={print}
				icon={icon}
			>
				<ContactText>{text}</ContactText>
			</Contact>
		))}
	</ContactsContainer>
);

export default () => (
	<React.Fragment>
		<ContactDetails />

		<Bio>
			Hi, I'm Freddie Ridell, a Senior Fullstack JavaScript Developer
			specialising in React.js and React Native.
			{false &&
				"I'm currently looking for new opportunities as a contractor in Manchester."}
		</Bio>
	</React.Fragment>
);
