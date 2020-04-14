import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'utils/global-style';
import PropTypes from 'prop-types';
import Routes from 'components/routes';
import Switch from 'components/theme-mode-toggle';
import { changeMode } from 'state/actions';
import { connect } from 'react-redux';
import darkTheme from 'utils/theme/dark';
import lightTheme from 'utils/theme/light';

function Layout({ children, mode, onChangeMode }) {
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
          <Switch
            checked={mode === 'dark'}
            onChange={() => {
              const newMode = mode === 'dark' ? 'light' : 'dark';
              onChangeMode(newMode);
              localStorage.setItem('mode', newMode);
            }}
          />
          <Routes />
        </Header>
        <main>{children}</main>
      </Wrapper>
    </ThemeProvider>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
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
