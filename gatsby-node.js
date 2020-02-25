const { createFilePath } = require(`gatsby-source-filesystem`);
const { parseISO, format } = require("date-fns/fp");
const keb = require("@freddieridell/kebab-case");
const path = require(`path`);

exports.onCreateNode = ({
	node,
	actions: { deleteNode, createNodeField, createParentChildLink },
	getNode,
	getNodes,
	getNodesByType,
	...rest
}) => {
	//this modifies data, adding a slug property to each markdown file

	if (node.internal.type === `MarkdownRemark`) {
		if (node.frontmatter.translationFor) {
			getNodesByType("MarkdownRemark")
				.filter(
					x =>
						x.fileAbsolutePath ===
						path.join(
							path.dirname(node.fileAbsolutePath),
							node.frontmatter.translationFor,
						),
				)
				.forEach(parent => {
					createParentChildLink({
						parent,
						child: node,
					});
				});
		}

		if (!node.frontmatter.published) {
			deleteNode(node);
			return;
		}

		const dateSlug = [
			format("y", parseISO(node.frontmatter.published)),
			format("MM", parseISO(node.frontmatter.published)),
		];

		const slug =
			"/" +
			path.join(
				...[
					node.frontmatter.type,
					...(node.frontmatter.type !== "open-source"
						? dateSlug
						: []),
					keb(node.frontmatter.slug || node.frontmatter.title),
				].filter(Boolean),
			);

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								type
								published
								title
							}
						}
					}
				}
			}
		`).then(result => {
			const types = new Set(
				result.data.allMarkdownRemark.edges.reduce(
					(types, { node }) => [...types, node.frontmatter.type],
					[],
				),
			);

			for (const type of types) {
				if (type !== "translation") {
					createPage({
						path: `/${type}/`,
						component: path.resolve(`./src/templates/listing.js`),
						context: {
							type,
							listing: true,
						},
					});
				}
			}

			result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				if (node.frontmatter.type !== "translation" && node.fields) {
					createPage({
						path: node.fields.slug,
						component: path.resolve(`./src/templates/post.js`),
						context: {
							slug: node.fields.slug,
						},
					});
				}
			});

			resolve();
		});
	});
};
