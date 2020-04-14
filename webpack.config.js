webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(config, options) {
    const terserPlugin = config.optimization.minimizer.find(minimizer => minimizer instanceof TerserPlugin);
    if(terserPlugin && terserPlugin.options && terserPlugin.options.terserOptions)
    {
        terserPlugin.options.terserOptions.keep_fnames = true;
    }

    return config;
};
