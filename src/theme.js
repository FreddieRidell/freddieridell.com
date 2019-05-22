const {
	corePallete,
	buildScheme,
} = require("@freddieridell/little-bonsai-styles");

const baseTheme = buildScheme({
	...corePallete,
	white: "#eee",
	black: "#222",
});

module.exports = baseTheme;
