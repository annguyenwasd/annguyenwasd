import theme from 'styled-theming';

export const colors = {
  red: '#a23434',
  black: '#181313',
  white: '#fff'
};

export const bgc = theme('mode', {
  light: colors.red,
  dark: colors.black
});

export const color = theme('mode', {
  light: colors.black,
  dark: colors.white
});
