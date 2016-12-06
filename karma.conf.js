const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'mocha', 'chai' ],
    files: [
      './src/index.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js'
    ],
    webpack: webpackConfig,
    preprocessors: {
      './src/index.js': [ 'webpack' ],
      './test/**/*.js': [ 'webpack' ]
    },
    browsers: [ 'Chrome' ], //, 'Safari' ],
    reporters: [ 'spec' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};