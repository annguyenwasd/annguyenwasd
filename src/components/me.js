import { Link, graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';

function Me() {
  const data = useStaticQuery(graphql`
    {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 50, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Link to="/">
      <Img fixed={data.me.childImageSharp.fixed} alt="Home page" />
    </Link>
  );
}

Me.propTypes = {};

Me.defaultProps = {};

export default Me;
