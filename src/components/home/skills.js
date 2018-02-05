import React from "react";

import { Ul, Section, } from "../../toolbox";

export default () => (
	<Section title = "Skills" toggleable >
		<Ul>
			{[
				"Javascript: Node, React, ReactNative, Redux, Webpack, Babel, ES6+",
				"CSS / SCSS",
				"GraphQL",
				"Linux, Shell, Git",
				"C / C++",
				"Performance analysis and optimisation",
				"Agile Project Management",
				"Test driven development, Continuous Integration / Deployment",
				"Stand up & sketch comedy, Juggling, Podcasting",
			].map(skill => <li key = { skill }> {skill}</li>)}
		</Ul>
	</Section>
);
