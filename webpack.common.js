var path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // Change to your "entry-point".
    context: __dirname, // to automatically find tsconfig.json
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|js|tsx|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: ">0.2%, not dead"
                            } // or whatever your project requires
                        ],
                        "@babel/preset-typescript",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                        ["@babel/plugin-proposal-decorators", { legacy: true }],
                        ["@babel/plugin-proposal-class-properties", { loose: true }],
                        ["@babel/plugin-proposal-private-methods", { loose: true }],
                        "@babel/plugin-transform-destructuring",
                        "@babel/plugin-transform-regenerator",
                        "@babel/plugin-transform-for-of",
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-proposal-optional-chaining",
                        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
                    ]
                }
            }
        }]
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
