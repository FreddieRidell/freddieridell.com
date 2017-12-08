import { injectGlobal, } from "styled-components";
import { modularScale, } from "polished";
import React from 'react'
import R from "ramda";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";

import './index.css'

injectGlobal`
	h1 {
		font-size: ${ modularScale(3) };
	}

	h2 {
		font-size: ${ modularScale(2) };
	}

	h3 {
		font-size: ${ modularScale(1) };
	}
`;

const ContentPane = styled.div`
	width: 100%;
	max-width: 30rem;
`;

const BreadcrumbContainer = styled.div`
	flex-flow: row wrap;

	& a::after {
		content: "/";
		padding: 0 0.33em;
		font-weight: normal;
		text-decoration: none;
	}
`;

const Header = ({ location }) => {
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

	return (
		<div>
			<BreadcrumbContainer>
				{breadcrumb.map(({ path, label, }) => [
					<Link to = { path + "/" }>{label}</Link>,
				])}
			</BreadcrumbContainer>

			<hr />
		</div>
	);
};

const TemplateWrapper = ({ children, ...props, }) => (
	<ContentPane>
		<Helmet
			title="Gatsby Default Starter"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Header {...props } />
		{children()}
	</ContentPane>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
