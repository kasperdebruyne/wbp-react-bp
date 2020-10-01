const { merge } = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    mode: "development",
    devServer:{
        compress:true,
        port:3000,
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});