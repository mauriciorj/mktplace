import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

module.exports = {
  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      {
        test: /\.(ts|js)x?$/,
        include: __dirname,
        loader: 'babel-loader'
      },

      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { modules: true } }]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin
  ],
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
}