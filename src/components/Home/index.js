import React from 'react';
import * as R from 'ramda';
import styled from '@emotion/styled';

import HeadShot from './HeadShot';
import Profile from './Profile';

const Hero = styled.section(
	{ display: 'flex', flexWrap: 'wrap', margin: "auto"},
	R.applySpec({
		maxWidth: R.pipe(
			R.path(['theme', 'size', 'paragraphWidth']),

			R.multiply(2.5),
		),
	}),
);

const Home = () => (
	<Hero>
		<HeadShot />
		<Profile />
	</Hero>
);

export default Home;
