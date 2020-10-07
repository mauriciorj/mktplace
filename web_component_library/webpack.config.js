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
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
}