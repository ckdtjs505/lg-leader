const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    open: true,
    compress: true,
    port: 8000,
    hot: true,
  },
})
