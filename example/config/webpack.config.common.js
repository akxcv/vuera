"use strict";

const HtmlPlugin = require("html-webpack-plugin");
const helpers = require("./helpers");
const Dotenv = require("dotenv-webpack");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const isDev = process.env.NODE_ENV === "development";

const webpackConfig = {
  entry: {
    polyfill: "@babel/polyfill",
    index: helpers.root("src", "index"),
    shared: "lodash",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue"],
    alias: {
      // vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      vue$: "vue/dist/vue.esm.js",
      "@": helpers.root("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [helpers.root("src")],
      },
      {
        test: /\.(react)\.?(jsx|tsx)(\?.*)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        //     options: {
        //         // Tell to ts-loader: if you check .vue file extension, handle it like a ts file
        //         appendTsSuffixTo: [ /\.vue$/ ]
        //     }
      },
      // https://stackoverflow.com/a/66901510/5954864
      // SASS and CSS files from Vue Single File Components:
      {
        test: /\.vue\.(s?[ac]ss)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      // SASS and CSS files (standalone):
      {
        test: /(?<!\.vue)\.(s?[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "resolve-url-loader",
            // options: {...}
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 20kb => after that, it turns into a resource (outside of bundle)
          },
        },
        generator: {
          filename: isDev ? "assets/[path][name].[ext]" : "assets/[hash].[ext]",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [helpers.root("src")],
      },
    ],
  },
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: "compact", // options are minimal, compact, expanded, verbose
    }),
    new Dotenv(),
    new HtmlPlugin({
      template: "index.html",
      url: process.env.BASE_URL || "",
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash:8].css",
      chunkFilename: "css/[id].[fullhash:8].css",
    }),
  ],
};

module.exports = webpackConfig;
