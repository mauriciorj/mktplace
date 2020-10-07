// WORKAROUND 
// module.exports = {
//   propsParser: require('react-docgen-typescript').parse,
//   webpackConfig: require('react-scripts/config/webpack.config'),
// }

module.exports = {
  components: 'src/components/**/*.{jsx,ts,tsx}',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader!css-loader']
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.tsx'],
      alias: {},
    },
  }
}