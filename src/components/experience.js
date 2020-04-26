import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import styled from 'styled-components';

function Experience({ date, icon, title, subTitle, content }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={icon}
    >
      {title && <h3 className="vertical-timeline-element-title">{title}</h3>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {content && (
        <List>
          {content.map(c => (
            <li key={c}>{c}</li>
          ))}
        </List>
      )}
    </VerticalTimelineElement>
  );
}

const List = styled.ul`
  margin-left: 25px;

  li {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`;

const SubTitle = styled.h4`
  margin: 10px 0;
  color: #969696 !important;
  font-weight: normal;

  * {
    color: #969696 !important;
  }
`;

Experience.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

Experience.defaultProps = {};

export default Experience;
