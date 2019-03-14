const theme = require("./src/components/theme");
module.exports = {
	siteMetadata: {
		title: "Gatsby Default Starter",
		siteUrl: `https://freddieridell.com`,
	},
	plugins: [
		"gatsby-plugin-sitemap",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `translations`,
				path: `${__dirname}/src/translations`,
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					"cloudinaryify-images",
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							showLineNumbers: true,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Freddie Ridell",
				short_name: "Freddie Ridell",
				start_url: "/",
				background_color: theme.color.text,
				theme_color: theme.color.text,
				display: "minimal-ui",
			},
		},
		"gatsby-plugin-offline",
	],
};
