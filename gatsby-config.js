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
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
			},
		},
		"gatsby-plugin-offline",
	],
};
