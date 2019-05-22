import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { createShadow } from "@freddieridell/little-bonsai-styles";

import Spacer from "../Toolbox/Spacer";

import HeadShot from "./HeadShot";
import Profile from "./Profile";

const Hero = styled.section(
	{ display: "flex", flexWrap: "wrap", margin: "auto" },
	R.applySpec({
		maxWidth: R.pipe(
			R.path(["theme", "size", "paragraphWidth"]),

			R.multiply(2.5),
		),
		boxShadow: createShadow(5),
	}),
);

const Home = () => (
	<React.Fragment>
		<Hero>
			<HeadShot />
			<Profile />
		</Hero>
		<Spacer height={1} />
	</React.Fragment>
);

export default Home;
