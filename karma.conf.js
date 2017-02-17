let env = {test: true};
let webpackConfig = require('./webpack.config')(env);

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