import React from 'react';
import {graphql} from 'gatsby';
import * as R from "ramda";

import Layout from "../components/layout";
import LinkList from "../components/LinkList";

export default ({data: { allMarkdownRemark: { edges } }, pageContext: { type } }) => {
	return (
		<Layout title = { type } >
			<LinkList data = {edges.map(R.prop("node"))} />
		</Layout>
	)
};

export const query = graphql`
  query($type: String!) {
	  allMarkdownRemark(
		  filter: {frontmatter: {type: {eq: $type}}}
		  sort: {fields: frontmatter___published, order: DESC}
	  ) {
		  edges {
			  node {
				  excerpt
				  fields {
					  slug
				  }
				  frontmatter {
					  title
					  published
					  abstract
				  }
			  }
		  }
	  }
  }
`;
