"use strict";

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const helpers = require("./helpers");
const commonConfig = require("./webpack.config.common");
const portFinderSync = require("portfinder-sync");

const webpackConfig = merge(commonConfig, {
  mode: "development",
  // devtool: 'cheap-module-eval-source-map',
  devtool: "inline-source-map",
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[id].chunk.js",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    open: true,
    port: portFinderSync.getPort(process.env.PORT || 3000),
    proxy: {},
  },
});

module.exports = webpackConfig;
