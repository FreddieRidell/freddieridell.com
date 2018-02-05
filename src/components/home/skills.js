import React from 'react'

import Link from 'gatsby-link'
import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'
import system from 'system-components'
import { format, } from "date-fns/fp";

import { P, Note, Ul, Section, H1, H2, H3, Hr,} from "../../toolbox";

export default () => (
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


