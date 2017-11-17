/* eslint-env node */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  context: resolve('src'),
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  entry: {
    bundle: ['babel-polyfill', './'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: /src/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      inject: true,
    }),
  ],
  resolve: {
    alias: prod ? {} : {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    clientLogLevel: 'error',
    historyApiFallback: true,
    contentBase: './',
  },
}
