const webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({


    frameworks: ['jasmine'],



    files: [
      './src/tests/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js' : ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
};
