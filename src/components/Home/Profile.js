import React from 'react';
import * as R from 'ramda';
import styled from '@emotion/styled';

const ProfileContainer = styled.section(
	{
		alignSelf: 'stretch',
		flexGrow: 4,
		flexShrink: 1,
	},
	R.applySpec({
		backgroundColor: R.path(['theme', 'color', 'symantic', 'background']),
		color: R.path(['theme', 'color', 'symantic', 'text']),
		padding: R.path(['theme', 'size', 'space', 1]),
	}),
);

export default () => <ProfileContainer>foo bar baz quz foo bar</ProfileContainer>;
