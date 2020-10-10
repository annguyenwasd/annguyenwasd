import React from 'react';
import PropTypes from 'prop-types';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const circle = {
  borderRadius: '100%',
  overflow: 'hidden'
};

export function MyImage({ size = 50, style, ...props }) {
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
    <div {...props} style={{ ...style, ...circle, width: size, height: size }}>
      <Img fluid={data.me.childImageSharp.fluid} fadeIn alt="annguyenwasd" />
    </div>
  );
}

MyImage.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number
};

MyImage.defaultProps = {};
