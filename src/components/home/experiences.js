import React from 'react'

import Link from 'gatsby-link'
import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'
import system from 'system-components'
import { format, } from "date-fns/fp";

import { P, Note, Ul, Section, H1, H2, H3, Hr,} from "../../toolbox";

const ExperienceDates = styled.div`
	margin-top: 1rem;
	color: #666;
`;

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

export default () => (
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
