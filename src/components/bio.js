import Typing, { Heading } from 'components/typing';
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
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Container>
      <ImgContainer>
        <Img fluid={data.me.childImageSharp.fluid} alt="It's me" />
      </ImgContainer>
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
  grid-template-rows: 100px 40px 40px;
  grid-gap: 10px;
  justify-items: center;

  ${Heading} {
    padding-left: 30%;
  }

  @media screen and (min-width: 769px) {
    grid-gap: 20px;
    grid-template-rows: 150px 40px 40px;

    ${Heading} {
      padding-left: 25%;
    }
  }
`;

const ImgContainer = styled.figure`
  height: 100px;
  width: 100px;

  @media screen and (min-width: 769px) {
    width: 150px;
    height: 150px;
  }
`;
