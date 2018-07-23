const { BabelLib } = require('@vzhdi/ox/plugins');
const { default: PluginBabelImport } = require('@vzhdi/ox-plugin-babel-import');
const { default: PluginReact } = require('@vzhdi/ox-react');

const oxEnv = process.env.OX_ENV;

module.exports = {
  dir: {
    config: './test/config',
    src: './test/src',
    build: './test/build',
  },
  plugins: [
    new PluginReact(),
    new PluginBabelImport('@vzhdi/react-runtime', {
      libraryDirectory: 'es',
      style: false,
    }),
    oxEnv === 'build-lib' || oxEnv === 'build-es'
      ? new BabelLib(oxEnv === 'build-es' ? false : 'commonjs')
      : null,
  ],
};
