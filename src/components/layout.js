import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'utils/global-style';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Routes from 'components/routes';
import Switch from 'components/theme-mode-toggle';
import { changeMode } from 'state/actions';
import { connect } from 'react-redux';
import darkTheme from 'utils/theme/dark';
import lightTheme from 'utils/theme/light';
import { rhythm } from 'utils/typography';

function Layout({ children, mode, onChangeMode, brand }) {
  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode && storedMode !== mode) {
      onChangeMode(storedMode);
    }
  }, []);
  return (
    <ThemeProvider
      theme={
        mode === 'light' ? { ...lightTheme, mode } : { ...darkTheme, mode }
      }
    >
      <GlobalStyle />

      <Wrapper>
        <Header>
          <Brand>{brand}</Brand>
          <Right>
            <Switch
              checked={mode === 'dark'}
              onChange={() => {
                const newMode = mode === 'dark' ? 'light' : 'dark';
                onChangeMode(newMode);
                localStorage.setItem('mode', newMode);
              }}
            />
            <Routes />
          </Right>
        </Header>
        <main>{children}</main>
      </Wrapper>
    </ThemeProvider>
  );
}

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
  brand: PropTypes.node,
  mode: PropTypes.string.isRequired,
  onChangeMode: PropTypes.func.isRequired
};

Layout.defaultProps = {
  brand: <Me />
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

function Me() {
  const data = useStaticQuery(graphql`
    {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Link to="/">
      <Img fixed={data.me.childImageSharp.fixed} alt="Home page" />
    </Link>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  padding: ${rhythm(1.25)};
  display: grid;
  grid-template-rows: ${rhythm(2)} 1fr;
  grid-gap: ${rhythm(0.8)};
  max-width: 1280px;
  margin: 0 auto;
`;

const Brand = styled.div`
  padding-left: ${rhythm(1)};
`;
