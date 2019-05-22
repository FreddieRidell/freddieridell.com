import React from "react";
import * as R from "ramda";
import { Global } from "@emotion/core";

const globalCss = R.applySpec({
	h1: {
		paddingTop: R.path(["size", "space", 4]),
		fontSize: R.path(["size", "font", 6]),
		lineHeight: R.path(["size", "space", 8]),
	},

	h2: {
		paddingTop: R.path(["size", "space", 3]),
		fontSize: R.path(["size", "font", 5]),
		lineHeight: R.path(["size", "space", 7]),
	},

	h3: {
		paddingTop: R.path(["size", "space", 2]),
		fontSize: R.path(["size", "font", 4]),
		lineHeight: R.path(["size", "space", 6]),
	},

	h4: {
		paddingTop: R.path(["size", "space", 1]),
		fontSize: R.path(["size", "font", 3]),
		lineHeight: R.path(["size", "space", 5]),
	},

	html: {
		fontSize: R.path(["size", "font", 2]),
		backgroundColor: R.path(["color", "symantic", "background"]),
		color: R.path(["color", "symantic", "text"]),
	},

	mark: {
		backgroundColor: R.path(["color", "symantic", "warning"]),
	},
});

export default ({ children }) => <Global styles={globalCss} />;
