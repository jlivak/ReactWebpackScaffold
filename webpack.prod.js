const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

var publicUrl = '/assets/';

module.exports = merge(common, {
    mode: 'production',
    module:
        {
            rules: [
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
