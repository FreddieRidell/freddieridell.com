import { injectGlobal, } from "styled-components";
import { modularScale, } from "polished";
import React from 'react'
import R from "ramda";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";
import "normalize.css";

import './index.css'

const ContentPane = styled.div`
	width: 100%;
	max-width: 60rem;
	min-width: 40rem;
`;

const BreadcrumbContainer = styled.div`
	flex-flow: row wrap;

	& a::after {
		content: "/";
		padding: 0 1rem;
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
		<Helmet>
			<title>
				Freddie Ridell
			</title>
		</Helmet>
		<Header {...props } />
		{children()}
	</ContentPane>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
