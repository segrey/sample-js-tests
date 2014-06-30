module.exports = function (karma) {
  karma.set({
    frameworks: ["browserify", "jasmine"],

    // Files that are to be loaded as globals
    files: [],

    // Files to browserify
    browserify: {
      files: [
        "test/**/*.js"
      ]
    },

    // Hopefully temporary hack
    preprocessors: {
      "/**/*.browserify": "browserify"
    },

    logLevel: karma.LOG_DEBUG,

    autoWatch: true
  });
};
