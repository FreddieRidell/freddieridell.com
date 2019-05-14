const R = require("ramda");
const { baseTheme } = require("@freddieridell/little-bonsai-styles");

module.exports = R.applySpec({
	color: {
		code: {
			bg: R.path(["palette", "base", "black"]),
			text: R.path(["palette", "base", "white"]),
			blue: R.path(["palette", "base", "blue"]),
			gray: () => "#777",
			green: R.path(["palette", "base", "green"]),
			lightgray: () => "#ccc",
			purple: R.path(["palette", "base", "purple"]),
			red: R.path(["palette", "base", "red"]),
			white: R.path(["palette", "base", "white"]),
			yellow: R.path(["palette", "base", "yellow"]),
		},
		bg: R.path(["palette", "light", "white"]),
		black: R.path(["palette", "base", "black"]),
		blue: R.path(["palette", "base", "blue"]),
		gray: () => "#777",
		green: R.path(["palette", "base", "green"]),
		lightgray: () => "#ccc",
		purple: R.path(["palette", "base", "purple"]),
		red: R.path(["palette", "base", "red"]),
		text: R.path(["palette", "base", "black"]),
		white: R.path(["palette", "base", "white"]),
		yellow: R.path(["palette", "base", "yellow"]),
	},
	size: {
		space: R.path(["size", "space"]),
		fontSize: R.path(["size", "font"]),
	},
})(baseTheme);
