import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { adjustRadience } from "@freddieridell/little-bonsai-styles";

import Spacer from "../Toolbox/Spacer";

//-                               "Javascript: Node, React, ReactNative, Redux, Babel, ES6+",                                                                                                                                                              │info ℹ ｢wdm｣:
//-                               "CSS / SCSS",                                                                                                                                                                                                            │info ℹ ｢wdm｣: Compiled successfully.
//-                               "GraphQL",                                                                                                                                                                                                               │ WAIT  Compiling...                                          13:14:46
//-                               "Linux, Shell, Git",                                                                                                                                                                                                     │
//-                               "rust",                                                                                                                                                                                                                  │info ℹ ｢wdm｣: Compiling...
//-                               "C / C++",                                                                                                                                                                                                               │ DONE  Compiled successfully in 226ms                        13:14:47
//-                               "Performance analysis and optimisation",                                                                                                                                                                                 │
//-                               "Agile Project Management",                                                                                                                                                                                              │info ℹ ｢wdm｣:
//-                               "Test driven development, Continuous Integration / Deployment",                                                                                                                                                          │info ℹ ｢wdm｣: Compiled successfully.
//-                               "Stand up & sketch comedy, Juggling, Podcasting",

const ProfileContainer = styled.section(
	{
		alignSelf: "stretch",
		flexGrow: 1,
		flexShrink: 0,
	},
	R.applySpec({
		backgroundColor: R.path(["theme", "color", "symantic", "background"]),
		color: R.path(["theme", "color", "symantic", "text"]),
		padding: R.path(["theme", "size", "space", 1]),
	}),
);

const H2 = styled.h2(
	R.applySpec({
		fontSize: R.path(["theme", "size", "font", 3]),

		":before": {
			content: R.always('"#"'),
			paddingRight: R.path(["theme", "size", "space", 0]),
			color: adjustRadience(0.2, ["theme", "color", "symantic", "text"]),
		},
	}),
);

const P = styled.p(
	R.applySpec({
		fontSize: R.path(["theme", "size", "font", 2]),
	}),
);

export default () => (
	<ProfileContainer>
		<H2>Who am I</H2>
		<Spacer height={1} />
		<P>
			I do <mark>things</mark>. lots of things
		</P>
		<Spacer height={1} />
	</ProfileContainer>
);
