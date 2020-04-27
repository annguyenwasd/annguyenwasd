import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { rhythm } from 'utils/typography';

function BlogPostTemplate({ data: { mdx: post } }) {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlogBody>
        <h1>
          {post.frontmatter.title}
          <small>
            <small className="post-date">{post.frontmatter.date}</small>
          </small>
        </h1>
        <MarkdownContent>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MarkdownContent>
      </BlogBody>
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({ mdx: PropTypes.shape({}) })
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const BlogBody = styled.article`
  padding-top: ${rhythm(2)};

  h1 .post-date {
    color: grey;
    opacity: 0.7;
    font-weight: normal;

    &:before {
      content: ' - ';
    }
  }

  @media screen and (min-width: 769px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const MarkdownContent = styled.div`
  max-width: calc(100vw - ${rhythm(1.25 * 2)});
`;
