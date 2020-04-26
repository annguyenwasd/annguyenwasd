import { Github, Skype, Twitter } from '@styled-icons/boxicons-logos';

import { MailSend } from '@styled-icons/boxicons-regular';
import React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
import styled from 'styled-components';

function Social() {
  return (
    <Wrapper>
      <a
        href="https://github.com/annguyenwasd"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Github title="@annguyenwasd" size="36" />
      </a>
      <a
        href="https://twitter.com/annguyenwasd"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Twitter title="@annguyenwasd" size="36" />
      </a>
      <a
        href="skype:live:an.nguyenwasd?chat"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Skype size="36" />
      </a>
      <a href="mailto:an.nguyenwasd@gmail.com" rel="noopener noreferrer">
        <MailSend size="36" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  ${StyledIconBase} {
    color: ${p => p.theme.color};
    width: 36px;
    margin: 0 5px;
  }
`;

Social.propTypes = {};

Social.defaultProps = {};

export default React.memo(Social);
