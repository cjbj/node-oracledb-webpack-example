const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
  entry: './src/example.js',
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
        // Copy the node-oracledb binary to dist
        from: path.resolve(__dirname, 'node_modules/oracledb/build'),
        to: 'node_modules/oracledb/build',
      },
    ]),
  ],
};

module.exports = config;
