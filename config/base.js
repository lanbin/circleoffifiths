const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  webpackMerge = require('webpack-merge')

// 获取几个库的地址
// 因为webpack的原因，所以需要分开
const phaserModule = path.resolve(__dirname, '..', 'node_modules/phaser-ce/build/custom'),
  pixi = path.resolve(phaserModule, 'pixi.js'),
  p2 = path.resolve(phaserModule, 'p2.js'),
  phaser = path.resolve(phaserModule, 'phaser-split.js')

module.exports = {
  entry: {
    index: "./src/js/index.js"
  },
  resolve: {
    // 将地址变成短名
    alias: {
      'pixi': pixi,
      'p2': p2,
      'phaser': phaser,
      '@': path.resolve(__dirname, '..', 'src')
    },
    extensions: ['.js', '.less']
  },
  module: {
    rules: [{
      // 将几个主库暴露成全局的
      test: /pixi\.js/,
      use: [{
        loader: 'expose-loader',
        options: 'PIXI'
      }]
    }, {
      test: /phaser-split\.js$/,
      use: [{
        loader: 'expose-loader',
        options: 'Phaser'
      }]
    }, {
      test: /p2\.js/,
      use: [{
        loader: 'expose-loader',
        options: 'p2'
      }]
    }, {
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader']
      })
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.(jpg|png|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[hash:7].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ]
}