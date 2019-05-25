const {
	corePallete,
	buildScheme,
} = require("@freddieridell/little-bonsai-styles");

const baseTheme = buildScheme({
	...corePallete,
	white: "#fcfcfc",
	black: "#222",
});

module.exports = baseTheme;
