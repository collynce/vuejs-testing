const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: ["./src/index.js"],
    output: {
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: false
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: './index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: [],
                loader: 'babel-loader'
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|mp3|mp4)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },

    optimization: {
        minimizer: [new TerserPlugin()],

        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
};
