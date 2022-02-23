'use strict'

const { merge } = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const helpers = require('./helpers')
const commonConfig = require('./webpack.config.common')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(commonConfig, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: false,
  output: {
    path: helpers.root('dist'),
    filename: 'js/[name].[fullhash:8].js',
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      // chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          // chunks: 'all'
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          // chunks: 'all',
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
})

module.exports = webpackConfig
