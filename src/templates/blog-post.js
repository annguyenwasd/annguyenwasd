import Layout from 'components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from 'components/seo';
import { graphql } from 'gatsby';

function BlogPostTemplate({ data: { mdx: post } }) {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({}).isRrequired
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
