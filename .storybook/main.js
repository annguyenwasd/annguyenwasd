const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js|mdx|md'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(__dirname, '../src/')
    ];

    return config;
  }
};
