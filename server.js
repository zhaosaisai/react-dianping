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
        '/api':{
            target: 'http://localhost:8089/',
            changeOrigin: true
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