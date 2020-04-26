import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from 'components/bio';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Container600 from 'utils/container-600';

function IndexPage({
  data: {
    allMdx: { edges: posts }
  }
}) {
  return (
    <Layout brand={<Link to="/">@annguyenwasd</Link>}>
      <SEO title="Home" />
      <Bio />
      <PostList>
        <h3>My blog posts:</h3>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={`/blog/${post.fields.slug}`}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </PostList>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({}).isRequird
  })
};

export default IndexPage;

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const PostList = styled(Container600)`
  max-width: 500px;

  @media screen and (min-width: 769px) {
    padding-left: 100px;
  }
`;
