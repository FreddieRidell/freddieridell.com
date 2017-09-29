import {
	withRouter,
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";
import Markdown from "react-markdown";
import { Helmet, } from "react-helmet";
import styled, { injectGlobal, } from "styled-components";

import allData from "src/content";

injectGlobal`
	html {
		font-family: sans-serif
	}

	body {
		margin: 1rem;
		align-items: stretch;
		display: flex;
		flex-direction: column;
	}

	div { 
		display: flex;
		flex-direction: column;
	}

	#root {
		align-items: center;
	}

	h1, h2, h3, h4, h5, h6, ul, ol {
		margin: 0;
		padding: 0;
	}

	h1 {
		margin-top: 1rem;
	}

	h2 {
		margin: 0.5rem 0;
	}

	ul, ol {
		padding-left: 2rem;
	}

	hr {
		background: black;
		border: 0;
		height: 1px;
		width: 100%;
	}

	a {
		color: black;
		font-weight: bold;
		text-decoration: none;
	}
`;

const ContentPane = styled.div`
	width: 100%;
	max-width: 30rem;
`;

const BreadcrumbContainer = styled.div`
	flex-direction: row;
`;

const Breadcrumb = styled(Link)``;

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
		allData
	);

	const title = R.pipe(
		R.tail,
		R.reverse,
		R.map( R.prop("label")),
		R.map(
			R.pipe(
				R.split(""),
				R.over(
					R.lensIndex(0),
					R.toUpper,
				),
				R.join(""),
			),
		),
		R.join(" | "),
		R.unless(
			R.length,
			R.always("Freddie Ridell"),
		),
	)(breadcrumb);

	return (
		<ContentPane>
			<Helmet>
				<title> { title } </title>
			</Helmet>

			<BreadcrumbContainer>
				{breadcrumb.map(({ path, label, }) => [
					<Breadcrumb to = { path + "/" }>{label}</Breadcrumb>,
					" / ",
				])}
			</BreadcrumbContainer>

			<hr />

			<Markdown source = { source } renderers = { { Link: RouterLink, } } />
		</ContentPane>
	);
});

export default () => (
	<Router>
		<Route path = "/" component = { Content } />
	</Router>
);
