import Bio, { imgType } from 'components/bio';

import Layout from 'components/layout';
import React from 'react';
import SEO from 'components/seo';
import { graphql } from 'gatsby';

function About({ data: { me } }) {
  return (
    <Layout>
      <SEO title="About" />
      <Bio img={me} />
    </Layout>
  );
}

About.propTypes = {
  data: imgType
};

export default About;

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
