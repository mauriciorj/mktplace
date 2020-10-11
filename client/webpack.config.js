const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                use: ['babel-loader']
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
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "public", "index.html"),
                filename: "index.html"
            }
        )
    ]
};