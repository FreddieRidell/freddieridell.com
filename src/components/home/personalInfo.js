import React from 'react'

import Link from 'gatsby-link'
import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'
import system from 'system-components'
import { format, } from "date-fns/fp";

import { P, Note, Ul, Section, H1, H2, H3, Hr,} from "../../toolbox";


const Bio = styled.p`
	font-style: italic;
	font-size: 2.5rem;
`;

export default () => (
	<Section>
		<H1>Freddie Ridell</H1>

		<Bio>
			Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising in React.js and React Native.
			I'm currently looking for new oportunities as a contractor in London.
		</Bio>

	</Section>
);

