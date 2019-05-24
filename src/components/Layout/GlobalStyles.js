import React from "react";
import * as R from "ramda";
import { Global } from "@emotion/core";

const globalCss = R.applySpec({
	h1: {
		fontSize: R.path(["size", "font", 6]),
		lineHeight: R.path(["size", "space", 8]),
		paddingTop: R.path(["size", "space", 4]),
	},

	h2: {
		fontSize: R.path(["size", "font", 5]),
		lineHeight: R.path(["size", "space", 7]),
		paddingTop: R.path(["size", "space", 3]),
	},

	h3: {
		fontSize: R.path(["size", "font", 4]),
		lineHeight: R.path(["size", "space", 6]),
		paddingTop: R.path(["size", "space", 2]),
	},

	h4: {
		fontSize: R.path(["size", "font", 3]),
		lineHeight: R.path(["size", "space", 5]),
		paddingTop: R.path(["size", "space", 1]),
	},

	p: {
		fontSize: R.path(["size", "font", 3]),
		lineHeight: R.path(["size", "space", 5]),
		paddingTop: R.path(["size", "space", 2]),
		paddingBottom: R.path(["size", "space", 3]),
	},

	"h1, h2, h3, h4, p": {
		paddingBottom: R.path(["size", "space", 2]),
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
