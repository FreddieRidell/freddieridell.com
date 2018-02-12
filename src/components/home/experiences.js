import React from "react";

import { format, } from "date-fns/fp";

import { P, Note, Section, H3, } from "../../toolbox";

const formatDate = date => {
	if (typeof date === "string") {
		return date;
	} else {
		return format("MMM, YYYY", date);
	}
};
const Experience = ({ position, biz, start, end, children, }) => (
	<section>
		<H3 mb = { 0 }>{position}</H3>
		<H3 fontSize = { 1 } mt = { 0 }>
			{biz}
		</H3>
		<Note>
			{formatDate(start)} - {end ? formatDate(end) : "Ongoing"}{" "}
		</Note>

		{children}
	</section>
);

export default () => (
	<Section title = "Experience">
		<Experience
			position = "Co-founder/Senior Developer"
			biz = "Codogo"
			start = { new Date(1451606400000) }
		>
			<P>
				The core focus of my work has been producing Codogo Write, a
				state-of-the-art writing web app with a focus on ease-of-use and
				polished user experience. We were recently invited to pitch with
				Y Combinator in California on the strength of the MVP I
				developed.
			</P>
			<P>
				To support development of this product, I’ve produced complex
				web and native apps and websites for over 20 clients, across a
				breadth of fields (including chat apps, social networks, and
				data-vis) both from scratch and on legacy systems in React and
				React Native.
			</P>
		</Experience>

		<Experience
			position = "Development Intern"
			biz = "Amazon Instant Video"
			start = { new Date(1433116800000) }
			end = { new Date(1441065600000) }
		>
			<P>
				I worked on Amazon’s native instant video player: a large scale
				real-time c++ codebase. I was responsible for porting it to OS X
				and fixing performance-critical memory bugs. Taking
				responsibility for mission-critical software and working to
				provide tooling for other developers allowed me to gain valuable
				experience in communicating with other developers across many
				other teams across Amazon.
			</P>
		</Experience>

		<Experience
			position = "Computer Science Degree (2:1)"
			biz = "Durham University"
			start = { new Date("2013-09-01") }
			end = { new Date(1451606400000) }
		>
			<Note>
				Dissertation: Designing, evaluating, and optimising a system for
				population simulation.
			</Note>
			<P>
				During my degree I studied a wide range of subjects: from
				runtime/space analysis and higher order logic to database
				systems and software development best practices. My exposure to
				the full range of modern software at a world renowned university
				provided me with the rock solid foundation I needed to hit the
				ground running providing elegant and powerful solutions to every
				problem I've encountered since.
			</P>
		</Experience>
	</Section>
);
