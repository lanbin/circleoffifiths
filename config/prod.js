/**
 * Created by berry on 17/2/9.
 */
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base')
const config = require('../package.json')
const exec = require('child_process').execSync
const hash = exec('git rev-parse --short HEAD').toString().trim()

module.exports = env => {
  return webpackMerge(baseConfig, {
    output: {
      path: path.join(__dirname, '../.dist'),
      filename: 'js/[name].' + hash + '.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false
          },
          compress: true
        }
      })
    ]
  })
}