import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

import { Sun } from '@styled-icons/boxicons-regular';
import { Moon } from '@styled-icons/boxicons-solid';
import styled, { ThemeContext } from 'styled-components';

function ThemeModeToggle({ checked, onChange }) {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      onChange={onChange}
      checked={checked}
      checkedIcon={<StyledMoon size="20" />}
      uncheckedIcon={<StyledSun size="20" />}
      onColor="#808080"
      offColor="#4b697a"
      offHandleColor={theme.background}
      onHandleColor={theme.background}
    />
  );
}

const StyledMoon = styled(Moon)`
  color: #faee92;
  margin: 0 0 0px 5px;
`;

const StyledSun = styled(Sun)`
  color: #fadf0d;
  margin: 0 0 0px 5px;
`;

ThemeModeToggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

ThemeModeToggle.defaultProps = {};

export default ThemeModeToggle;
