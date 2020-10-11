const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk')

module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    entry: ["./src/index.tsx"],
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {
        //         from: "public",
        //         to: ".",
        //         ignore: ["README"]
        //     }
        // ]),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "public", "index.html"),
                filename: "index.html"
            }
        )
    ]
};