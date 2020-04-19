import Typing, { Heading } from 'components/type';

import Container600 from 'utils/container-600';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Social from 'components/socials';
import styled from 'styled-components/macro';

const Bio = ({ img }) => {
  return (
    <Container>
      <Img fixed={img.childImageSharp.fixed} alt="It's me" />
      <Typing />
      <Social />
    </Container>
  );
};

export const imgType = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fixed: PropTypes.shape({})
  })
});

Bio.propTypes = {
  img: imgType
};

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
