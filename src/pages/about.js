import React from 'react';

import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Social from 'components/socials';

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <p>{`Hi, I'm An /ʌn/`}</p>
        <Social />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

About.propTypes = {};

export default About;
