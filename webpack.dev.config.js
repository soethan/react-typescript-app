const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 9000,
    watchContentBase: false,
    hotOnly: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};