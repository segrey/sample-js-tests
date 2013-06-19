// Karma configuration
// Generated on Thu May 16 2013 01:34:14 GMT+0400 (MSK)

module.exports = function (karma) {
  karma.configure({

// base path, that will be used to resolve files and exclude
    basePath: '',


// frameworks to use
    frameworks: ['jasmine'],


// list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'spec/**/*Spec.js'
    ],


// list of files to exclude
    exclude: [

    ],


// test results reporter to use
// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    preprocessors: {
      '**/src/**/*.js': 'coverage'
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

// web server port
    port: 9876,


// cli runner port
    runnerPort: 9100,


// enable / disable colors in the output (reporters and logs)
    colors: true,


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: karma.LOG_DEBUG,


// enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
    browsers: [],


// If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
    singleRun: false,


// plugins to load
    plugins: [
      'karma-jasmine'
      , 'karma-chrome-launcher'
      , 'karma-coverage'
    ]
  });
};
