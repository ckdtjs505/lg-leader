const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [path.resolve(__dirname, './src/index.js')],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'study',
      template: './template.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [{ test: /\.js$/, use: ['babel-loader'] }],
  },
}
