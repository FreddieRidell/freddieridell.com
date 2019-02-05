const R = require("ramda");

const runRecursive = (fn) => {
	return function r(node){
		fn(node);
		(node.children || []).forEach(r);
	}
}

module.exports = (
  { files, markdownNode, markdownAST, pathPrefix, getNode, reporter, cache },
  pluginOptions
) => {

	//const { internal: { frontmatter: {title, hero }}}  = markdownNode;

	const images = [];

	console.log(title, hero, images, markdownNode);

	runRecursive(
		({type, ...rest})  => {
			if(type === "image"){
				console.log(rest)
			}
		}
	)( markdownAST);

}
