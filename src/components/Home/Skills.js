import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

const SkillsList = styled.ul(calm({}));

const Skill = styled.li(calm({}));

const Skills = () => (
	<section>
		<h2>Skills</h2>
		<SkillsList>
			<Skill>Javascript/Typescript/Flow, ES6+</Skill>
			<Skill>React, React Native, Redux</Skill>
			<Skill>Express, REST, GraphQL</Skill>
			<Skill>Linux, Shell, Git</Skill>
			<Skill>Rust, C, C++</Skill>
			<Skill>
				Test Driven Development, Continuous Integration/Deployment
			</Skill>
			<Skill>Standup & Sketch Comedy</Skill>
			<Skill>Juggling</Skill>
			<Skill>Podcasting, Voice Acting</Skill>
		</SkillsList>
	</section>
);

export default Skills;
