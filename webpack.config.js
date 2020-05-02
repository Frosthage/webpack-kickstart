
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'bundle-[hash].js'
     },
    devtool: 'inline-source-map',
    devServer: {
         contentBase: './dist',
         hot: true
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
             {
                 template: "src/index.html",
             }
        ),
        new webpack.HotModuleReplacementPlugin()
      ],
};