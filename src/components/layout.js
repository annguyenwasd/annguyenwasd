import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { bgc, color } from 'utils/theme';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { Github, Twitter, Skype } from '@styled-icons/boxicons-logos';
import { MailSend } from '@styled-icons/boxicons-regular';
import { Link } from 'gatsby';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

   body {
     background-color: ${bgc};
     color: ${color};
   }
`;

function Layout({ children }) {
  const [mode, setMode] = useState('dark');

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />

      <Wrapper>
        <header>
          <Navigation>
            <Link to="/" title="home">
              /
            </Link>
            <Link to="/experience" title="experience">
              xp
            </Link>
          </Navigation>
        </header>
        <main>{children}</main>
        <Footer>
          <a
            href="https://github.com/annguyenwasd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github title="@annguyenwasd" />
          </a>
          <a
            href="https://twitter.com/AnNguye27219186"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter title="@AnNguye27219186" />
          </a>
          <a
            href="skype:live:an.nguyenwasd?chat"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Skype />
          </a>
          <a href="mailto:an.nguyenwasd@gmail.com" rel="noopener noreferrer">
            <MailSend />
          </a>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  ${StyledIconBase} {
    color: white;
    width: 36px;
    margin: 0 5px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    color: white;
    font-weight: bold;
    margin: 0 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-rows: 32px 1fr 36px;
  grid-gap: 10px;
  max-width: 1280px;
  margin: 0 auto;
`;

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
