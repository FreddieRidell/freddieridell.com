import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import { format } from "date-fns/fp";

const formatDate = date => {
	if (typeof date === "string") {
		return date;
	} else {
		return format("MMM, yyyy", date);
	}
};

const ExperienceStyled = styled.section`
	margin: ${R.path(["theme", "size", "space", 3])} 0;
	grid-column: left / right;
`;

const PositionStyled = styled.h3`
	margin: 0;
`;

const BizStyled = styled.h4`
	margin: 0;
`;

const PeriodWorked = styled.div`
	font-weight: bold;
	color: ${R.path(["theme", "color", "gray"])};
	margin: ${R.path(["theme", "size", "space", 0])} 0;
`;

const Experience = ({ position, biz, start, end, children }) => (
	<ExperienceStyled>
		<PositionStyled>{position}</PositionStyled>
		<BizStyled>{biz}</BizStyled>
		<PeriodWorked>
			{formatDate(start)} - {end ? formatDate(end) : "Ongoing"}
		</PeriodWorked>

		{children}
	</ExperienceStyled>
);

export default () => (
	<React.Fragment>
		<Experience
			position="Senior React Contractor"
			biz="Workshare"
			start={new Date("2018-02-18")}
			end={new Date("2018-08-19")}
		>
			<p>
				I worked as a senior team-member working to modernize one of
				Workshare's core products: producing a greenfield react app
				built on an existing API.
			</p>
			<p>
				I was instrumental in making major decisions during the
				development: technical choices and policy decisions that were
				foundational to the app as a whole. I was also trusted to
				provide training to other members of the team to bring them up
				to speed with react best practices.{" "}
			</p>
		</Experience>

		<Experience
			position="Co-founder/Senior Developer"
			biz="Codogo"
			end={new Date("2018-02-18")}
			start={new Date(1451606400000)}
		>
			<p>
				The core focus of my work has been producing Codogo Write, a
				state-of-the-art writing web app with a focus on ease-of-use and
				polished user experience. We were invited to pitch with Y
				Combinator in California on the strength of the MVP I developed.
			</p>
			<p>
				To support development of this product, I produced complex web
				and native apps and websites for over 20 clients, across a
				breadth of fields (including chat apps, social networks, and
				data-vis) both from scratch and on legacy systems in React and
				React Native.
			</p>
		</Experience>

		<Experience
			position="Development Intern"
			biz="Amazon Instant Video"
			start={new Date(1433116800000)}
			end={new Date(1441065600000)}
		>
			<p>
				I worked on Amazon’s native instant video player: a large scale
				real-time c++ codebase. I was responsible for porting it to OS X
				and fixing performance-critical memory bugs. Taking
				responsibility for mission-critical software and working to
				provide tooling for other developers allowed me to gain valuable
				experience in communicating with other developers across many
				other teams across Amazon.
			</p>
		</Experience>

		<Experience
			position="Computer Science Degree (2:1)"
			biz="Durham University"
			start={new Date("2013-09-01")}
			end={new Date(1451606400000)}
		>
			<p>
				Dissertation: Designing, evaluating, and optimizing a system for
				population simulation.
			</p>
			<p>
				During my degree I studied a wide range of subjects: from
				runtime/space analysis and higher order logic to database
				systems and software development best practices. My exposure to
				the full range of modern software at a world renowned university
				provided me with the rock solid foundation I needed to hit the
				ground running providing elegant and powerful solutions to every
				problem I've encountered since.
			</p>
		</Experience>
	</React.Fragment>
);
