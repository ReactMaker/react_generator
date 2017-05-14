'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBaseConfig = require('./Base');

class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      cache: false,
      entry: [
        './client.js'
      ],
      plugins: [
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'production'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html',
          filename: '../index.html',
        }),
        //new webpack.NoErrorsPlugin()
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    // this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dist';
  }
}

module.exports = WebpackDistConfig;
