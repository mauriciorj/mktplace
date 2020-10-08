// const { injectBabelPlugin } = require('react-app-rewired')
// const rewireLess = require('react-app-rewire-less')
// const theme = require('./theme.js')

// module.exports = function override(config, env) {
//   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
//   config = rewireLess.withLoaderOptions({
//     modifyVars: theme
//   })(config, env)
//   return config
// }

const { addBabelPlugin, addLessLoader } = require('customize-cra');

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig = addBabelPlugin(
      ['import', { libraryName: 'antd', style: true }],
    )(webpackConfig);
    return webpackConfig;
  },
};