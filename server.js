const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const compiler = webpack(config)
const server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './build',
    stats: {
        colors: true
    },
    proxy: {
        "/api": {
            // "target": "http://172.16.1.139:9000/",
            "target": "http://10.1.7.174:9301/",
            "changeOrigin": true,
            "secure": false
        }
    }
})

config.entry.unshift(
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8088/"
)

server.listen(8088, 'localhost', (err) => {
    if (err) {
        return console.error(error)
    }
    console.log('The server is listening on 8088')
})