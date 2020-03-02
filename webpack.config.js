/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');

const config = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
    mode: 'production',
    watch: false,
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                // Copy the binary Oracle DB driver to dist.
                // This needs to be used together with the string-replace-loader below.
                from: path.resolve(__dirname, 'node_modules/oracledb/build'),
                to: 'node_modules/oracledb/build',
            },
        ]),
        new StartServerPlugin({
            name: 'index.js',
        }),
    ],
};

module.exports = config;
