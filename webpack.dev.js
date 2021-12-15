const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
var path = require('path');

var publicUrl = 'assets/';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    module:
        {
            rules: [{
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
            }
            ]
        },
    plugins:
        [new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl,
            // You can pass any key-value pairs, this was just an example.
            // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })]
});
