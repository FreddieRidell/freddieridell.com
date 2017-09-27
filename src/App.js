import allData from "src/content";
import Markdown from "react-remarkable";

console.log(allData);

export default () => <Markdown
	options = {{
		html: true,
	}}
	source = {allData[window.location.pathname] }
/>;

