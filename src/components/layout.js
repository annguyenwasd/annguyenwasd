import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'utils/global-style';
import Header from 'components/header';
import Me from 'components/me';
import PropTypes from 'prop-types';
import { changeTheme } from 'state/actions';
import { connect } from 'react-redux';
import darkTheme from 'utils/theme/dark';
import lightTheme from 'utils/theme/light';
import { rhythm } from 'utils/typography';

function Layout({ children, theme, onChangeTheme, brand }) {
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode && storedMode !== theme) {
      onChangeTheme(storedMode);
    }
  }, []);

  return (
    <ThemeProvider
      theme={
        theme === 'light' ? { ...lightTheme, theme } : { ...darkTheme, theme }
      }
    >
      <GlobalStyle />

      <Wrapper>
        <Header
          brand={<Brand>{brand}</Brand>}
          onSwitch={() => {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            onChangeTheme(newTheme);
            localStorage.setItem('theme', newTheme);
          }}
        />
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
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  onChangeTheme: theme => {
    dispatch(changeTheme(theme));
  }
});

Layout.propTypes = {
  brand: PropTypes.node,
  theme: PropTypes.string.isRequired,
  onChangeTheme: PropTypes.func.isRequired
};

Layout.defaultProps = {
  brand: <Me />
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

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
