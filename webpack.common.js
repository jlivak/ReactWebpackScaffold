var path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: __dirname, // to automatically find tsconfig.json
    entry: './src/Index.tsx', // Change to your "entry-point"
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
    },
    plugins: [new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/templates/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "assets" }
            ],
        })]
};
