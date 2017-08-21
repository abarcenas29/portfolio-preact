const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    port: 3100,
    publicPath: '/'
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeEmptyAttributes: true
      },
      showErrors: true,
      inject: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}
