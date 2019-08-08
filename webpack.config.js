webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(config, options) {
    const env = process.env.ENV = process.env.NODE_ENV = options && options.fileReplacements.length > 0 ? 'production' : 'development';

    // console.log('Environment: ' + env);

    if(config && config.plugins) {
        const definePlugin = new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(env)
            }
        });
        if (config.plugins) {
            config.plugins.push(definePlugin);
        } else {
            config.plugins = [definePlugin];
        }
    }

    const terserPlugin = config.optimization.minimizer.find(minimizer => minimizer instanceof TerserPlugin);
    if(terserPlugin && terserPlugin.options && terserPlugin.options.terserOptions)
    {
        terserPlugin.options.terserOptions.keep_fnames = true;
    }

    return config;
};
