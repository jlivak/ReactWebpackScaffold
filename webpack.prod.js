const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

var publicUrl = '/assets/';

module.exports = merge(common, {
    mode: 'production',
    module:
        {
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
                                    targets: ">0.2%, not dead",
                                    useBuiltIns: "entry",
                                    corejs: "3.8"
                                }
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {legacy: true}],
                            "@babel/plugin-transform-runtime",
                        ]
                    }
                }
            },
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            }
                        },
                        {
                            loader: 'string-replace-loader',
                            options: {
                                multiple: [{
                                    search: /url\('/g,
                                    replace: "url('" + publicUrl,
                                    flags: "g"
                                },
                                    {
                                        search: /url\("/g,
                                        replace: "url(\"" + publicUrl,
                                        flags: "g"
                                    }]
                            }
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            }
                        },
                        {
                            loader: 'string-replace-loader',
                            options: {
                                multiple: [{
                                    search: /url\('/g,
                                    replace: "url('" + publicUrl,
                                    flags: "g"
                                },
                                    {
                                        search: /url\("/g,
                                        replace: "url(\"" + publicUrl,
                                        flags: "g"
                                    }]
                            }
                        },
                        "sass-loader",
                    ],
                }
            ]
        },
    plugins:
        [new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })]
});
