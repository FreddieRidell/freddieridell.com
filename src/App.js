import {
	withRouter,
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import Markdown from "react-markdown";
import { Helmet, } from "react-helmet";

import allData from "src/content";

const RouterLink = ({ href, children, }) =>
	href.match(/^(https?:)?\/\//) ? (
		<a href = { href }>{children}</a>
	) : (
		<Link to = { href }>{children}</Link>
	);

const Content = withRouter(({ location, }) => {
	const breadcrumb = location.pathname
		.split("/")
		.filter(R.length)
		.reduce(
			(acc, val) => [
				...acc,
				{
					path: ((R.last(acc) || {}).path || "") + "/" + val,
					label: val,
				},
			],
			[
				{
					path: "",
					label: "freddie",
				},
			],
		);

	const dataPath =
		location.pathname !== "/" && location.pathname.slice(-1) === "/"
			? location.pathname.slice(0, -1)
			: location.pathname;

	const source = R.pathOr(
		"# 404\n## Please go elsewhere",
		[dataPath, "content",],
		allData,
	);

	const title = R.pipe(
		R.tail,
		R.reverse,
		R.map(R.prop("label")),
		R.map(
			R.pipe(R.split(""), R.over(R.lensIndex(0), R.toUpper), R.join("")),
		),
		R.join(" | "),
		R.unless(R.length, R.always("Freddie Ridell")),
	)(breadcrumb);

	const shouldRedirect = dataPath !== "/404" && !allData[dataPath];

	return (
		<div className = "content-pane">
			{shouldRedirect && <Redirect to = "/404" />}

			<Helmet>
				<title> {title} </title>
			</Helmet>

			<div className = "breadcrumb-container">
				{breadcrumb.map(({ path, label, }) => [
					<Link to = { path + "/" }>{label}</Link>,
				])}
			</div>

			<hr />

			<div className = "content">
				<Markdown source = { source } renderers = { { Link: RouterLink, } } />
			</div>

			<Link
				to = "/404"
				style = { {
					display: "none",
				} }
			/>
		</div>
	);
});

export default () => (
	<Router>
		<Route path = "/" component = { Content } />
	</Router>
);
