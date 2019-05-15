const {
	corePallete,
	buildScheme,
} = require("@freddieridell/little-bonsai-styles");
//export { corePallete, buildScheme, createShadow, adjustRadience };

const baseTheme = buildScheme(corePallete);
console.log({ corePallete, baseTheme });

module.exports = baseTheme;
