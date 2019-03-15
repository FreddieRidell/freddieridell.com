import React from "react";
import styled from "styled-components";

const List = styled.ul`
	grid-column: left / right;
`;

export default () => (
	<List>
			{[
				/*eslint-disable no-script-url*/
				"Javascript: Node, React, ReactNative, Redux, Babel, ES6+",
				"CSS / SCSS",
				"GraphQL",
				"Linux, Shell, Git",
				"rust",
				"C / C++",
				"Performance analysis and optimisation",
				"Agile Project Management",
				"Test driven development, Continuous Integration / Deployment",
				"Stand up & sketch comedy, Juggling, Podcasting",
			].map(skill => (
				<li key={skill}> {skill}</li>
			))}
		</List>
);
