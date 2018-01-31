import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

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

const Skills = styled.div`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1rem;
	flex-wrap: wrap;
`;

const ExperienceDates = styled.div`
	margin-top: 1rem;
	color: #666;
`;

const Bio = styled.p`
	font-style: italic;
	font-size: 2.5rem;
`;

export default ({ data }) => (
	<div>
		<h1>Freddie Ridell</h1>

		<Bio>
			Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising in React.js and React Native.
			I'm currently looking for new oportunities as a contractor in London.
		</Bio>

		<ContactContainer>
			<ContactElem href="https://twitter.com/FreddieRidell">twitter</ContactElem>
			<ContactElem href="https://github.com/CodogoFreddie">github</ContactElem>
			<ContactElem href = "tel:+447521160572">07521 160 572</ContactElem>
			<ContactElem href = "mailto:freddie.ridell@gmail.com">freddie.ridell@gmail.com</ContactElem>
		</ContactContainer>

		<hr />

		<h2>Skills</h2>
		<ul>
			<li>
				Javascript: Node.js, React, React Native, Redux, Webpack, Babel, ES6+ 
			</li>
			<li>
				CSS / SCSS
			</li>
			<li>
				GraphQL
			</li>
			<li>
				Linux, Shell, Git
			</li>
			<li>
				C / C++
			</li>
			<li>
				Performance analysis and optimisation
			</li>
			<li>
				Agile Project Management
			</li>
			<li>
				Test driven development, Continuous Integration / Deployment
			</li>
			<li>
				Stand up & sketch comedy, Juggling, Podcasting
			</li>
		</ul>

		<hr/>

		<h2>Experience</h2>
		<h3>Co-founder/Senior Developer – Codogo</h3>
		<ExperienceDates>January 2016 – Ongoing</ExperienceDates>

		<p>
			The core focus of my work has been producing Codogo Write, a state-of-the-art writing web app with a focus on ease-of-use and polished user experience. We were recently invited to pitch with Y Combinator in California on the strength of the MVP I developed.
		</p>
		<p>
			To support development of this product, I’ve produced complex web and native apps and websites for over 20 clients, across a breadth of fields (including chat apps, social networks, and data-vis) both from scratch and on legacy systems in React and React Native.
		</p>

		<h3>Development Intern – Amazon Instant Video</h3>
		<ExperienceDates>June 2015 – September 2015</ExperienceDates>

		<p>
			I worked on Amazon’s native instant video player: a large scale real-time c++ codebase. I was responsible for porting it to OS X and fixing performance-critical memory bugs. Taking responsibility for mission-critical software and working to provide tooling for other developers allowed me to gain valuable experience in communicating with other developers across many other teams across Amazon.
		</p>

		<h2>Addresses</h2>
		<div id="addresses">
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
		</div>
	</div>
)
