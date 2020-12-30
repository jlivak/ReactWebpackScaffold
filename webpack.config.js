var path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

var publicUrl = '';

module.exports = {
    // Change to your "entry-point".
    context: __dirname, // to automatically find tsconfig.json
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devtool: "source-map",
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
                        "react-hot-loader/babel"
                    ]
                }
            }
        },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/templates/index.html'
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl,
            // You can pass any key-value pairs, this was just an example.
            // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
        })]
};
