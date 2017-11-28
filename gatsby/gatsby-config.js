module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		"gatsby-transformer-remark",
		`gatsby-plugin-react-helmet`,
	],
}
