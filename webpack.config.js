const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/OrcSlayer.js',
  output: {
    path: './build',
    filename: 'OrcSlayer.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
};