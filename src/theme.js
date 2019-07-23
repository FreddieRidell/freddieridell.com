const R = require("ramda");
const {
	corePallete,
	buildScheme,
} = require("@freddieridell/little-bonsai-styles");

const baseTheme = R.pipe(
	buildScheme,
	R.over(R.lensPath(["size", "paragraphWidth"]), R.multiply(5 / 6)),
)({
	...corePallete,
	white: "#fcfcfc",
	black: "#222",
});

module.exports = baseTheme;
