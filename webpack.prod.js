const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "./js/[name].[contentHash].bundle.js",
    },
    optimization: {
        minimize:true,
        minimizer:[
            new CssMinimizerPlugin({
                minimizerOptions:{
                    preset:[
                        "default",
                        {
                            discardComments: { removeAll : true}
                        }
                    ]
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "/css/[name].[hash].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
});
