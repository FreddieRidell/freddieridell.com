import React from "react";

export default () => (
	<div width="50%" title="Skills">
		<ul>
			{[
				/*eslint-disable no-script-url*/
				"Javascript: Node, React, ReactNative, Redux, Babel, ES6+",
				"CSS / SCSS",
				"GraphQL",
				"Linux, Shell, Git",
				"C / C++",
				"Performance analysis and optimisation",
				"Agile Project Management",
				"Test driven development, Continuous Integration / Deployment",
				"Stand up & sketch comedy, Juggling, Podcasting"
			].map(skill => (
				<li key={skill}> {skill}</li>
			))}
		</ul>
	</div>
);
