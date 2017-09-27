import allData from "src/content";
import Home from "src/site/home";
import Markdown from "react-remarkable";

console.log(allData);

export default () => <Markdown source = {allData[window.location.pathname] } />;

