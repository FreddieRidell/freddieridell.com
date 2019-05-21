import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";

import Spacer from "../Toolbox/Spacer";

const thingsIAm = [
	"a Frontend Developer",
	"a Voice Actor",
	"an Open Source Contributor",
	"a Podcaster",
	"a Seamster",
	"a Juggler",
	"a Standup Comic",
];

const HeadShotContainer = styled.section(
	{
		flexGrow: 1,
		flexShrink: 1,
	},
	R.applySpec({
		backgroundColor: R.path(["theme", "color", "chromatic", "black"]),
		color: R.path(["theme", "color", "chromatic", "white"]),
		maxHeight: R.path(["theme", "size", "space", 9]),
		maxWidth: R.path(["theme", "size", "space", 10]),
		padding: R.path(["theme", "size", "space", 1]),
	}),
);

const H1 = styled.h1(
	R.applySpec({
		fontSize: R.path(["theme", "size", "font", 5]),
	}),
);

const H2 = styled.h2(
	R.applySpec({
		fontSize: R.path(["theme", "size", "font", 3]),
	}),
);

export default () => {
	const [state, dispatch] = React.useReducer(state => {
		return state + 1;
	}, 0);

	React.useEffect(() => {
		const x = setInterval(dispatch, 1000);
		return () => clearInterval(x);
	}, [dispatch]);

	return (
		<HeadShotContainer>
			<H1>Hi, I'm Freddie</H1>
			<Spacer height={0} />
			<H2>I'm {thingsIAm[state % thingsIAm.length]}</H2>
		</HeadShotContainer>
	);
};
