import React from 'react';
import Switch from 'react-switch';
import { Moon } from '@styled-icons/boxicons-solid';
import { Sun } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

function ThemeModeToggle({ checked, onChange }) {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      checkedIcon={<StyledMoon size="20" />}
      uncheckedIcon={<StyledSun size="20" />}
      offColor={colors.white}
      onColor={colors.red}
      offHandleColor={colors.red}
    />
  );
}

const StyledMoon = styled(Moon)`
  color: white;
  margin: 0 0 6px 5px;
`;

const StyledSun = styled(Sun)`
  color: ${colors.red};
  margin: 0 0 6px 5px;
`;

ThemeModeToggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

ThemeModeToggle.defaultProps = {};

export default ThemeModeToggle;
