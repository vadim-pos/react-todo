let isOnProduction = false;
let webpackConfig = require('./webpack.config')(isOnProduction);

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['src/tests/**/*.test.jsx'],
        preprocessors: {
            'src/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};