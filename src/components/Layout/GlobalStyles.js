import React from "react";
import * as R from "ramda";
import { Global } from "@emotion/core";

const globalCss = R.applySpec({
	html: {
		fontSize: R.path(["size", "font", 2]),
		backgroundColor: R.path(["color", "symantic", "background"]),
		color: R.path(["color", "symantic", "text"]),
	},

	mark: {
		backgroundColor: R.path(["color", "symantic", "warning"]),
	}
});

export default ({ children }) => <Global styles={globalCss} />;
