import Bio, { imgType } from 'components/bio';

import Layout from 'components/layout';
import React from 'react';
import SEO from 'components/seo';

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Bio />
    </Layout>
  );
}

About.propTypes = {
  data: imgType
};

export default About;
