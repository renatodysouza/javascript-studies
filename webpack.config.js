/* eslint-disable no-undef */
const webpack =  require('webpack');

module.exports = {
    entry: {
        filename: './src/main.js'
    },
    output: {
        filename: './dist/build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                
            }
        ]
    }
}
