/* eslint-disable no-undef */
const webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        filename: './src/main.js'
    },
    output: {
        filename: './build.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './index.html'
      })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
                
            },
            
        ]
    },
    mode: 'production',
    optimization: {
        minimize: true,
    }
   
}
