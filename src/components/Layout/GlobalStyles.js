import React from "react";
import * as R from "ramda";
import { Global } from "@emotion/core";

const generateAtScale = (x = 0) => ({
	h1: {
		fontSize: R.path(["size", "font", 6 + x]),
		lineHeight: R.path(["size", "space", 8 + x]),
		paddingTop: R.path(["size", "space", 6 + x]),
	},

	h2: {
		fontSize: R.path(["size", "font", 5 + x]),
		lineHeight: R.path(["size", "space", 7 + x]),
		paddingTop: R.path(["size", "space", 6 + x]),
	},

	h3: {
		fontSize: R.path(["size", "font", 4 + x]),
		lineHeight: R.path(["size", "space", 6 + x]),
		paddingTop: R.path(["size", "space", 6 + x]),
	},

	h4: {
		fontSize: R.path(["size", "font", 3 + x]),
		lineHeight: R.path(["size", "space", 5 + x]),
		paddingTop: R.path(["size", "space", 6 + x]),
	},

	"p, ol, ul, pre": {
		fontSize: R.path(["size", "font", 3 + x]),
		lineHeight: R.path(["size", "space", 5 + x]),
		paddingTop: R.path(["size", "space", 2 + x]),
		paddingBottom: R.path(["size", "space", 3 + x]),
	},

	"ol, ul": {
		paddingLeft: R.path(["size", "space", 5 + x]),
	},

	"h1, h2, h3, h4, p": {
		paddingBottom: R.path(["size", "space", 2 + x]),
	},

	a: {
		color: R.path(["color", "symantic", "link"]),
	},

	html: {
		fontSize: R.path(["size", "font", 2 + x]),
		backgroundColor: R.path(["color", "symantic", "background"]),
		color: R.path(["color", "symantic", "text"]),
	},

	mark: {
		backgroundColor: R.path(["color", "symantic", "warning"]),
	},
});

const globalCss = R.applySpec({
	"@media screen": generateAtScale(0),
	"@media print": generateAtScale(-1),
});

export default ({ children }) => <Global styles={globalCss} />;
