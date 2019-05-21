const {
	corePallete,
	buildScheme,
} = require("@freddieridell/little-bonsai-styles");

const baseTheme = buildScheme({
	...corePallete,
	white: "#eee",
	black: "#222",
});

console.log(baseTheme);

module.exports = baseTheme;
