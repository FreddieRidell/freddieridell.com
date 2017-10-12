//@preval

const fs = require("fs");
const R = require("ramda");
var crypto = require("crypto");

const walkSync = (dir, filelist) => {
	const files = fs.readdirSync(dir);

	filelist = filelist || [];
	files.forEach(function(file) {
		if (fs.statSync(dir + file).isDirectory()) {
			filelist = walkSync(dir + file + "/", filelist);
		} else {
			if (file.includes(".md")) {
				const buffer = fs.readFileSync(dir + "/" + file);
				if (buffer) {
					const content = buffer.toString();
					filelist.push([
						"/" +
							(dir + file.replace(".md", ""))
								.replace("src/content/", "")
								.replace(/\/?index$/, ""),

						{
							content: content,
							currentHash: crypto
								.createHash("md5")
								.update(content)
								.digest("hex"),

							created: new Date().getTime(),
							updated: new Date().getTime(),
						},
					]);
				}
			}
		}
	});
	return filelist;
};

module.exports = R.fromPairs(walkSync("src/content/"));
