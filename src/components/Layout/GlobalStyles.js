import React from "react";
import * as R from "ramda";
import { Global } from "@emotion/core";

const globalCss = R.applySpec({
	html: {
		fontSize: R.path(["size", "font", 2]),
		backgroundColor: R.path(["color", "symantic", "background"]),
		color: R.path(["color", "symantic", "text"]),
	},
});

//const globalCss = (theme) => {
//return {
//html: {
//fontSize: theme.size.font[2],
//backgroundColor: theme.color.symantic.background,
//},
//}
//};

export default ({ children }) => <Global styles={globalCss} />;
