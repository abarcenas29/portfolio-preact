const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    port: 3333,
    publicPath: '/'
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
