const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + "/src/index.html",
            inject: "body",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
};