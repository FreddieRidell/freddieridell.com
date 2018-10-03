import React from 'react';
import {graphql} from 'gatsby';

export default ({data}) => {
  console.log({data});
  return <div />;
};

export const query = graphql`
  query($type: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: $type}}}
      sort: {fields: frontmatter___published, order: DESC}
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            type
            published
          }
        }
      }
    }
  }
`;
