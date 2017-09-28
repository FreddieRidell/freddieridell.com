const Markdown = require('react-markdown')

import allData from "src/content";
import { withRouter, BrowserRouter as Router, Link, } from "react-router-dom";
//import Markdown from "react-markdown";
import styled, { injectGlobal, } from "styled-components";

injectGlobal`
	html {
		font-family: sans-serif
	}

	body {
		align-items: stretch;
		display: flex;
		flex-direction: column;
	}

	#root {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	hr {
		background: black;
		border: 0;
		height: 1px;
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

const Breadcrumb = styled(Link)` `;

const RouterLink = ({href, children, }) => (
	href.match(/^(https?:)?\/\//)
	? <a href={href}>{children}</a>
	: <Link to={href}>{children}</Link>
);

const Content = withRouter( ({ location, }) => {

	const breadcrumb = location.pathname.split("/").filter(R.length).reduce(
		(acc, val) => ([
			...acc,
			{
				path: ((R.last(acc) || {}).path || "") + "/" + val,
				label: val,
			}
		]),
		[],
	);

	const dataPath = location.pathname !== "/" && location.pathname.slice(-1) === "/"
		? location.pathname.slice(0, -1)
		: location.pathname

	return (
		<ContentPane>

			<Breadcrumb to = "/">freddie</Breadcrumb>{ " / " }

			{
				breadcrumb.map( ({ path, label, }) => ([
					<Breadcrumb to = { path + "/" } >{ label }</Breadcrumb>, " / "
				]))
			}

			<hr/>

			<Markdown source = {allData[dataPath]} renderers={{Link: RouterLink}} />

		</ContentPane>
	);
});

export default () => {

	return (
		<Router>
			<Content />
		</Router>
	);

};
