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
import exp from 'data/exp';

const timelineLogos = {
  [ReactLogo.displayName]: <ReactLogo />,
  [Angular.displayName]: <Angular />,
  [CodeCurly.displayName]: <CodeCurly />
};

function Experience() {
  return (
    <Layout>
      <SEO title="Exp" />
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
