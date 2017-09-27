//@preval

const fs = require("fs");
const R = require("ramda");

const walkSync = (dir, filelist) => {
	const files = fs.readdirSync(dir);

	filelist = filelist || [];
	files.forEach(function(file) {
		if (fs.statSync(dir + file).isDirectory()) {
			filelist = walkSync(dir + file + '/', filelist);
		}
		else {
			if(file.includes(".md")){
				const buffer = fs.readFileSync(dir + "/" + file);
				if(buffer){

					filelist.push( [
						"/" + (dir + file.replace(".md", "")).replace("src/content/", "").replace( /\/?index$/, ""), 
						buffer.toString(),
					]);
				}
			}
		}
	});

	return filelist;
};

module.exports = R.fromPairs( walkSync("src/content/"));
