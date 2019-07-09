import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import DividedList from "../Toolbox/DividedList";
import HeadShot from "./HeadShot";
import PageTitle from "../Toolbox/PageTitle";
import Profile from "./Profile";
import Spacer from "../Toolbox/Spacer";

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
		maxWidth: R.pipe(
			R.path(["theme", "size", "paragraphWidth"]),
		),
	}),
);

const Home = () => (
	<React.Fragment>
		<PageTitle>Home</PageTitle>
		<Spacer height={6} />
		<PostContaner>
			<DividedList
				data={[]}
				getKey={() => "x"}
				renderItem={() => <div />}
				renderDivider={() => PostDivider}
			/>
		</PostContaner>
		<Spacer height={3} />
	</React.Fragment>
);

export default Home;
