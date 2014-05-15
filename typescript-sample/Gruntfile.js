module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    opt: {
      "client": {
        "tsTestSrc": "test",
        "tsTestGen": "test-gen"
      }
    },

    ts: {
      options: {
        compile: true,                 // perform compilation. [true (default) | false]
        comments: false,               // same as !removeComments. [true | false (default)]
        target: 'es5',                 // target javascript language. [es3 (default) | es5]
        module: 'commonjs',            // target javascript module style. [amd (default) | commonjs]
        noImplicitAny: true,
        sourceMap: false,              // generate a source map for every output js file. [true (default) | false]
        sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
        mapRoot: '',                   // where to locate .map.js files. [(default) '' == generated js location.]
        declaration: false             // generate a declaration .d.ts file for every output js file. [true | false (default)]
      },
      test: {
        src: ['<%= opt.client.tsTestSrc %>/MainSpec.ts'],
        outDir: '<%= opt.client.tsTestGen %>'
      }
    },
    tslint: {
      options: {
        formatter: "prose",
        configuration: {
          // https://github.com/palantir/tslint#supported-rules
          "rules": {
            "bitwise": true,
            "classname": true,
            "curly": true,
            "debug": false,
            "dupkey": true,
            "eofline": true,
            "eqeqeq": true,
            "evil": true,
            "forin": false,
            // "indent": [false, 4], // WebStormのFormatterと相性が悪い
            "labelpos": true,
            "label-undefined": true,
            // "maxlen": [false, 140],
            "noarg": true,
            "noconsole": [false,
              "debug",
              "info",
              "time",
              "timeEnd",
              "trace"
            ],
            "noconstruct": true,
            "nounreachable": false, // switchに警告出してくるので…
            "noempty": false, // プロパティアクセス付き引数有りのコンストラクタまで怒られるので
            "oneline": [true,
              "check-open-brace",
              "check-catch",
              "check-else",
              "check-whitespace"
            ],
            "quotemark": [true, "double"],
            "radix": false, // 10の基数指定するのめんどいので
            "semicolon": true,
            "sub": true,
            "trailing": true,
            "varname": false, // _hoge とかが許可されなくなるので…
            "whitespace": [false, // WebStormのFormatterと相性が悪い
              "check-branch",
              "check-decl",
              "check-operator",
              "check-separator" ,
              "check-type"
            ]
          }
        }
      },
      files: {
        src: [
          '<%= opt.client.tsTestSrc %>/**/*.ts'
        ]
      }
    },
    clean: {
      build: {
        src: [
          '<%= opt.client.tsTestGen %>'
        ]
      }
    },
    karma: {
      all: {
        options: {
          configFile: 'karma.conf.js',
          browsers: ['PhantomJS'],
          reporters: ['progress'],
          autoWatch: false,
          singleRun: true,
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', ['clean', 'ts', 'tslint']);
  grunt.registerTask('test', ['clean', 'ts', 'karma']);

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
