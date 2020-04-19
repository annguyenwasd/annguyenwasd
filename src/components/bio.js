import Typing, { Heading } from 'components/type';
import { graphql, useStaticQuery } from 'gatsby';

import Container600 from 'utils/container-600';
import Img from 'gatsby-image';
import React from 'react';
import Social from 'components/socials';
import styled from 'styled-components/macro';

const Bio = () => {
  const data = useStaticQuery(graphql`
    {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Img fixed={data.me.childImageSharp.fixed} alt="It's me" />
      <Typing />
      <Social />
    </Container>
  );
};

Bio.propTypes = {};

Bio.defaultProps = {};

export default Bio;

const Container = styled(Container600)`
  display: grid;
  grid-template-rows: 150px 40px 40px;
  grid-gap: 20px;
  justify-items: center;

  ${Heading} {
    padding-left: 100px;
  }
`;
