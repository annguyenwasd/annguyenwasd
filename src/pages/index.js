import Bio, { imgType } from 'components/bio';
import { Link, graphql } from 'gatsby';

import Container600 from 'utils/container-600';
import Layout from 'components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from 'components/seo';
import styled from 'styled-components';

function IndexPage({
  data: {
    allMdx: { edges: posts },
    me
  }
}) {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio img={me} />
      <PostList>
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
    allMdx: PropTypes.shape({}).isRequird,
    me: imgType
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
    me: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const PostList = styled(Container600)`
  padding-left: 100px;
`;
