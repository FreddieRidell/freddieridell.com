const R = require("ramda");

const runRecursive = (fn) => {
	return function r(node){
		fn(node);
		(node.children || []).forEach(r);
	}
}

cloudinaryifyHtml = (imgName, alt) => {
	return ['<a target="_blank" href="https://res.cloudinary.com/little-bonsai/image/upload/f_auto/v1548885223/',
		imgName,
		'"><img alt="',
		alt,
		'" src="https://res.cloudinary.com/little-bonsai/image/upload/c_scale,f_auto,q_auto,w_700/v1548885223/',
		imgName,
		'"/></a>'
	].join("");
};

module.exports = (
	{ files, markdownNode, markdownAST, pathPrefix, getNode, reporter, cache },
	pluginOptions
) => {

	//this isn't working, i'll figure out why later
	//if(markdownNode.frontmatter.hero){
		//markdownNode.frontmatter.hero = cloudinaryifyHtml( markdownNode.frontmatter.hero)
	//}

	runRecursive(
		node  => {
			if(node.type === "image"){
				node.type = "html";
				node.value = cloudinaryifyHtml(node.url, node.alt);
			}
		}
	)( markdownAST);
}
