import allData from "src/content";
import { Link,} from "react-router-dom";
import Markdown from "react-remarkable";
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

const Breadcrumb = styled.a` `;

export default () => {
	const breadcrumb = window.location.pathname.split("/").filter(R.length).reduce(
		(acc, val) => ([
			...acc,
			{
				path: ((R.last(acc) || {}).path || "") + "/" + val,
				label: val,
			}
		]),
		[],
	);

	const dataPath = window.location.pathname !== "/" && window.location.pathname.slice(-1) === "/"
		? window.location.pathname.slice(0, -1)
		: window.location.pathname

	return (
		<ContentPane>

			<Breadcrumb href = "/">freddie</Breadcrumb>{ " / " }

			{
				breadcrumb.map( ({ path, label, }) => ([
					<Breadcrumb href = { path + "/" } >{ label }</Breadcrumb>, " / "
				]))
			}

			<hr/>

			<Markdown
				options = {{
					html: true,
				}}
				source = {allData[dataPath]}
			/>

	</ContentPane>
	);

};
