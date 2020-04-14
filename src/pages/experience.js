import 'react-vertical-timeline-component/style.min.css';

import { Angular, ReactLogo } from '@styled-icons/boxicons-logos';
import { Code, CodeCurly, Star } from '@styled-icons/boxicons-regular';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import Layout from 'components/layout';
import React from 'react';
import SEO from 'components/seo';
import { School } from '@styled-icons/boxicons-solid';
import XP from 'components/experience';
import exp from 'data/exp';
import styled from 'styled-components';

const timelineLogos = {
  [ReactLogo.displayName]: <ReactLogo />,
  [Angular.displayName]: <Angular />,
  [CodeCurly.displayName]: <CodeCurly />
};

function Experience() {
  return (
    <Layout>
      <SEO title="Experience" />
      <Wrapper>
        <VerticalTimeline>
          {exp.map(({ company, position, date, logo, responsibilities }) => (
            <XP
              key={company}
              date={date}
              icon={timelineLogos[logo]}
              subTitle={position}
              title={company}
              content={responsibilities}
            />
          ))}
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
