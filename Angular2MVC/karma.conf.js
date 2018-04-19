module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter')
        ],

        files: [
          'app/Components/user.component.spec.ts'
        ],

        reporters: ['progress', 'kjhtml'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};