const path = require('path'),
  webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  baseConfig = require('./base.js'),
  config = require('../package.json')

module.exports = env => {
  return webpackMerge(baseConfig, {
    devtool: 'eval-source-map',
    output: {
      path: path.join(__dirname, '../.dist'),
      filename: 'js/[name].js',
      publicPath: '/',
      sourceMapFilename: '[name].map'
    },
    devServer: {
      port: 4567,
      host: "0.0.0.0",
      historyApiFallback: true,
      noInfo: false,
      progress: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  })
}