const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const WebpackMonitor = require('webpack-monitor')

const NODE_ENV = process.env.NODE_ENV || "development"

/**
 * config of plugins
 */
const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: NODE_ENV === "development"
})

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html',
    inject: 'body',
    alwaysWriteToDisk: true
})

const DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
    }
})

const OpenBrowserPluginConfig = new OpenBrowserPlugin({
    url: 'http://localhost:8088'
})

const WebpackMonitorConfig = new WebpackMonitor({
    capture: true,
    launch: true,
    port: 3030
})

/**
 * config of webpack
 */

const config = {
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js?[hash]',
        publicPath: '/'
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx'],
        alias: {
            'components': path.resolve(__dirname, 'src/components'),
            'containers': path.resolve(__dirname, 'src/containers'),
            '__redux': path.resolve(__dirname, 'src/redux'),
            'config': path.resolve(__dirname, 'src/config'),
            'router': path.resolve(__dirname, 'src/router'),
            'util': path.resolve(__dirname, 'src/util'),
            'static': path.resolve(__dirname, 'src/static')
        }
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPluginConfig.extract({
                    use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, 
                            {
                                loader: 'postcss-loader',
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
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test:/\.(png|git|jpg|jpeg|bmp)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            },
            {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig,
        DefinePlugin,
        // OpenBrowserPluginConfig,
        // WebpackMonitorConfig
    ],
    devtool: 'source-map'
}

if (NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: true 
    }))
}

module.exports = config
