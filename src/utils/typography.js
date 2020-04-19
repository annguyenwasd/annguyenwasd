import Typography from 'typography';

const typography = new Typography({
  title: 'an-theme',
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['400', '400i', '700', '700i']
    },

    {
      name: 'Fira Code',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  bodyFontFamily: ['Roboto Mono', 'monospace'],
  headerFontFamily: ['Fira Code', 'monospace']
});

export const { scale, rhythm, options } = typography;
export default typography;
