import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import DividedList from "../Toolbox/DividedList";
import PageTitle from "../Toolbox/PageTitle";
import Spacer from "../Toolbox/Spacer";

import Bio from "./Bio";
import Skills from "./Skills";
import Experiences from "./Experiences";

const PostHr = styled.hr(
	calm({
		display: "block",
		color: R.path(["theme", "color", "symantic", "text"]),
	}),
);

const PostDivider = () => (
	<React.Fragment>
		<Spacer height={4} />
		<PostHr />
		<Spacer height={3} />
	</React.Fragment>
);

const PostContaner = styled.nav(
	calm({
		alignSelf: "center",

		"@media screen": {
			maxWidth: R.path(["theme", "size", "paragraphWidth"]),
		},
	}),
);

const Home = () => (
	<React.Fragment>
		<PageTitle hideOnPrint>Home</PageTitle>
		<PageTitle showOnPrint>Freddie Ridell</PageTitle>
		<PostContaner>
			<Bio />
			<Skills />
			<Experiences />
		</PostContaner>
		<Spacer height={3} />
	</React.Fragment>
);

export default Home;
