import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

function Routes() {
  return (
    <Navigation>
      <Link to="/" title="home">
        /
      </Link>
      <Link to="/experience" title="experience">
        experience
      </Link>
      <Link to="/about" title="about">
        about
      </Link>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;

  a {
    font-weight: bold;
    margin: 0 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
