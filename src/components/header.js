import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';
import { Menu } from '@styled-icons/boxicons-regular';
import PropTypes from 'prop-types';
import Switch from 'components/theme-switch';
import { Tree } from '@styled-icons/boxicons-solid';
import { connect } from 'react-redux';
import { rhythm } from 'utils/typography';
import styled from 'styled-components/macro';
import useMediaQuery from 'utils/mq';

const Header = ({ onSwitch, brand, theme }) => {
  const { isTabletOrMobile } = useMediaQuery();
  const [showHeader, setShowHeader] = useState(false);

  const Navigation = isTabletOrMobile ? TabletNav : DesktopNav;
  const BackDrop = isTabletOrMobile ? FullDevice : React.Fragment;

  useEffect(() => {
    if (!isTabletOrMobile) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [isTabletOrMobile]);

  return (
    <Container>
      {isTabletOrMobile ? (
        <Toggle
          onClick={() => {
            setShowHeader(!showHeader);
          }}
        >
          {showHeader ? <Tree /> : <Menu />}
        </Toggle>
      ) : (
        brand
      )}

      {showHeader && (
        <BackDrop>
          <Navigation>
            {isTabletOrMobile && <Link to="/">home</Link>}
            <Link to="/experience" title="experience">
              experience
            </Link>
            <Link to="/about" title="about">
              about
            </Link>
            <Switch checked={theme === 'dark'} onChange={onSwitch} />
          </Navigation>
        </BackDrop>
      )}
    </Container>
  );
};

Header.propTypes = {
  brand: PropTypes.node,
  theme: PropTypes.string.isRequired,
  onSwitch: PropTypes.func
};

Header.defaultProps = {
  brand: null,
  onSwitch: () => {}
};

export default connect(
  state => ({ theme: state.theme }),
  null
)(React.memo(Header));

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  position: relative;

  @media screen and (min-width: 769px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: inherit;
  flex-direction: inherit;

  a {
    font-weight: bold;
    margin-top: ${rhythm(1)};

    &:last-child {
      margin-bottom: ${rhythm(1)};
    }
  }

  @media screen and (min-width: 769px) {
    a {
      margin: 0 ${rhythm(1.2)};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Toggle = styled.button`
  width: 50px;
  align-self: start;
  padding: 0;
  background: transparent;
  border: none;
  opacity: 0.7;
  color: ${p => p.theme.foreground};
  z-index: 2;
`;

const TabletNav = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${rhythm(3)};

  a {
    margin-bottom: ${rhythm(0.8)};
  }
`;

const FullDevice = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${p => p.theme.background};
  padding: ${rhythm(1.2)};
`;
