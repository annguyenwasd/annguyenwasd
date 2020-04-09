import React, { useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { bgc, color } from 'utils/theme';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { Github, Twitter, Skype } from '@styled-icons/boxicons-logos';
import { MailSend } from '@styled-icons/boxicons-regular';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { changeMode } from 'state/actions';

import Switch from 'components/theme-mode-toggle';
import { connect } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

   body {
     background-color: ${bgc};
     color: ${color};
   }
`;

function Layout({ children, mode, onChangeMode }) {
  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode && storedMode !== mode) {
      onChangeMode(storedMode);
    }
  }, []);

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
              exp
            </Link>
            <Switch
              checked={mode === 'dark'}
              onChange={() => {
                const newMode = mode === 'dark' ? 'light' : 'dark';
                onChangeMode(newMode);
                localStorage.setItem('mode', newMode);
              }}
            />
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
            href="https://twitter.com/annguyenwasd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter title="@annguyenwasd" />
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
  padding-bottom: 20px;

  ${StyledIconBase} {
    color: ${color};
    width: 36px;
    margin: 0 5px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    color: ${color};
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

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {};

const mapStateToProps = state => ({
  mode: state.mode
});

const mapDispatchToProps = dispatch => ({
  onChangeMode: mode => {
    dispatch(changeMode(mode));
  }
});

Layout.propTypes = {
  mode: PropTypes.string.isRequired,
  onChangeMode: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
