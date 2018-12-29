const theme = require("./src/components/theme");

module.exports = {
	siteMetadata: {
		title: "Gatsby Default Starter",
	},
	plugins: [
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
				name: `media`,
				path: `${__dirname}/src/media`,
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},

					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							showLineNumbers: true,
						},
					},
					"gatsby-remark-copy-linked-files",
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
