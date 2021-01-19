const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

var publicUrl = '/assets/';

module.exports = merge(common, {
    mode: 'production',
    plugins:
        [new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl,
        })]
});
