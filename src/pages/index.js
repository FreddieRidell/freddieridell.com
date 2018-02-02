import React from 'react'

import Link from 'gatsby-link'
import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'
import system from 'system-components'
import { format, } from "date-fns/fp";

import { P, Note, Ul, Section, H1, H2, H3, Hr,} from "../toolbox";

const ContactElem = styled.a`
	display: block;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 0.1em 0.3em; //forgive me padre
	margin-right: 1rem;
	margin-bottom: 1rem;

	transition: all 0.2s ease-in;

	&:hover {
		color: white;
		background-color: black;
	}
`;

const ContactContainer = styled.div`
	margin-bottom: -1rem;
	flex-direction: row;
	justify-content: flex-start;
	margin-top: 1rem;
	flex-wrap: wrap;
`;

const Skill = styled.div`
	display: block;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 0.2rem 0.6rem;
`;

const ExperienceDates = styled.div`
	margin-top: 1rem;
	color: #666;
`;

const Bio = styled.p`
	font-style: italic;
	font-size: 2.5rem;
`;


const PersonalInfo = () => (
	<Section>
		<H1>Freddie Ridell</H1>

		<Bio>
			Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising in React.js and React Native.
			I'm currently looking for new oportunities as a contractor in London.
		</Bio>

	</Section>
);

//<ContactContainer>
//<ContactElem href="https://twitter.com/FreddieRidell">twitter</ContactElem>
//<ContactElem href="https://github.com/CodogoFreddie">github</ContactElem>
//<ContactElem href = "tel:+447521160572">07521 160 572</ContactElem>
//<ContactElem href = "mailto:freddie.ridell@gmail.com">freddie.ridell@gmail.com</ContactElem>
//</ContactContainer>

const Skills = () => (
	<Section title = "Skills" >
		<Ul>
			{
				[
				"Javascript: Node, React, ReactNative, Redux, Webpack, Babel, ES6+",
				"CSS / SCSS",
				"GraphQL",
				"Linux, Shell, Git",
				"C / C++",
				"Performance analysis and optimisation",
				"Agile Project Management",
				"Test driven development, Continuous Integration / Deployment",
					"Stand up & sketch comedy, Juggling, Podcasting",
				].map( skill => <li key = { skill } > {skill}</li> )
			}
		</Ul>
	</Section>
);

const formatDate = date => {
	if(typeof date === "string"){
		return date;
	} else {
		return format("MMM, YYYY", date);
	}
};
const Experience = ({ role, biz, start, end, children,}) => (
	<section>
		<H3 mb = { 0 } >{role}</H3>
		<H3 mt = { 0 } >{biz}</H3>
		<Note>{ formatDate(start) } - { end ? formatDate(end) : "Ongoing" } </Note>

		{ children }
	</section>
);

const Experiences = () => (
	<Section title = "Experience">
		<Experience
			role = "Co-founder/Senior Developer"
			biz = "Codogo"
			start = { new Date(1451606400000) }
		>
			<P>
				The core focus of my work has been producing Codogo Write, a state-of-the-art writing web app with a focus on ease-of-use and polished user experience. We were recently invited to pitch with Y Combinator in California on the strength of the MVP I developed.
			</P>
			<P>
				To support development of this product, I’ve produced complex web and native apps and websites for over 20 clients, across a breadth of fields (including chat apps, social networks, and data-vis) both from scratch and on legacy systems in React and React Native.
			</P>
		</Experience>

		<Experience
			role = "Development Intern"
			biz = "Amazon Instant Video"
			start = { new Date(1433116800000) }
			end = { new Date(1441065600000) }
		>
		<P>
			I worked on Amazon’s native instant video player: a large scale real-time c++ codebase. I was responsible for porting it to OS X and fixing performance-critical memory bugs. Taking responsibility for mission-critical software and working to provide tooling for other developers allowed me to gain valuable experience in communicating with other developers across many other teams across Amazon.
		</P>
	</Experience>
	</Section>
);

const AddressesCodeBlock = system({
	is: "code",
	bg: "lightgray",
}).extend`
	box-shadow: inset 0 0 16px rgba(0,0,0,0.32);
	display: block;
	font-family: monospace;
	overflow: auto;
	white-space: pre;
	width: 100%;
`;

const Addresses = () => (
	<Section title = "Addresses"> 
		<AddressesCodeBlock>
			pgp: 6BE0AF404BB9D844281F3DA5ACD8B92700BF93A0
			{'\n'}
			eth: 0x330E067E74FB15d4A71e58afFf459Db92eA85a78
			{'\n'}
			monero:
			46CFjzzLYuWJtT1tuFaRSTRp3XnqH8rUB6j8CpHgXC9EG3WBbdzfQKXZxcKNSoz28AS4hPRus7acaG5XEiEAvkkX3izgNkg
			{'\n'}
			btc: 159CcWg7MvmKePfUoKxXYRf2TPEorGzqGD
			{'\n'}
			ltc: LfZdJDtwNpsKrsJYEgqAuJnCBoyiMPYs1Y
			{'\n'}
			doge: DEVPfEpNTeTzUMzttfdxZ9ULTUAqzY2vPw
			{'\n'}
			Yu Gi Oh Duel Links: 549-882-525
		</AddressesCodeBlock>
	</Section>
);

export default ({ data }) => (
	<div>
		<PersonalInfo />

		<Skills />

		<Experiences />

		<Addresses />
	</div>
)
