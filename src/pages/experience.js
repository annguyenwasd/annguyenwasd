import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Code, Star, CodeCurly } from '@styled-icons/boxicons-regular';
import { School } from '@styled-icons/boxicons-solid';
import { ReactLogo, Angular } from '@styled-icons/boxicons-logos';
import styled from 'styled-components';
import XP from 'components/experience';

import SEO from 'components/seo';
import Layout from 'components/layout';

function Experience() {
  return (
    <Layout>
      <SEO title="xp" />
      <Wrapper>
        <VerticalTimeline>
          <XP
            date="12/2018-10/2019"
            icon={<ReactLogo />}
            subTitle="Front-end developer"
            title="DOL Tech"
            content={[
              'Structure database modal in GraphCMS',
              'Build landing pages using Gatsby JS',
              'Setup && build SPA applications using React JS',
              'Interview new front-end members'
            ]}
          />
          <XP
            date="07/2018-04/2019"
            icon={<Angular />}
            subTitle="Front-end developer"
            title="ULO Technologies"
            content={[
              'Structure && build SPA application',
              'Apply Google Cloud Firebase for building real-time chat app',
              'Apply Google Cloud Functions for expose api for back end application calls'
            ]}
          />

          <XP
            date="10/2015-07/2018"
            icon={<CodeCurly />}
            subTitle="Java & Front-end developer"
            title="FPT Software HCM"
            content={[
              'Implement Views in android application',
              'Research MEAN stack',
              'Onsite in Malaysia as front-end developer'
            ]}
          />
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 50px 0 100px 0;

  * {
    color: initial;
  }
`;

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
