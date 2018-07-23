// import themeConfig from './default.json';

const themeConfig = require('./index');

module.exports = {
  install: (less, pluginManager, functions) => {
    functions.add('getThemeConfigValue', key => {
      if (key.value in themeConfig) {
        if (key.value.match(/color/gi)) {
          return less.color(themeConfig[key.value].replace('#', ''));
        }
        return themeConfig[key.value];
      }
      return null;
    });
  },
};
