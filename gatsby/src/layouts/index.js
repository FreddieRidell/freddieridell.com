import React from 'react'
import R from "ramda";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";

import './index.css'

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

const Header = () => {
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

const TemplateWrapper = ({ children }) => (
	<ContentPane>
		<Helmet
			title="Gatsby Default Starter"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Header />
		{children()}
	</ContentPane>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
