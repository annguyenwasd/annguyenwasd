import Typing, { Heading } from 'components/type';

import Img from 'gatsby-image';
import Layout from 'components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from 'components/seo';
import Social from 'components/socials';
import { graphql } from 'gatsby';
import styled from 'styled-components';

function IndexPage({ data: { me } }) {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Img fixed={me.childImageSharp.fixed} alt="It's me" />
        <Typing />
        <Social />
      </Container>
    </Layout>
  );
}

const Container = styled.article`
  width: 600px;
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 150px 40px 40px;
  grid-gap: 20px;
  justify-items: center;

  ${Heading} {
    padding-left: 100px;
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    me: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({})
      })
    })
  })
};

export default IndexPage;

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me-c.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
