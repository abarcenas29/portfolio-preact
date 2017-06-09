var Webpack = require('webpack')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanCSSPlugin = require('less-plugin-clean-css')
const OfflinePlugin = require('offline-plugin')

var webpack = {}
let filename = ''
let chunkFilename = '[name]-[chunkhash].js'
if (process.env.NODE_ENV === 'production') {
  webpack = require('./internals/webpack.prod.js')
  // entry
  webpack.entry = {
    app: './src/main.js',
    vendor: [ 'preact', 'semantic-ui-react', 'lodash' ]
  }
  filename = 'bundle.[chunkhash].js'
} else {
  webpack = require('./internals/webpack.dev.js')
  webpack.entry = [
    './src/main.js'
  ]
  filename = '[name].bundle.js'
}

var path = require('path')

// entry
webpack.entry = {
  app: './src/main.js',
  vendor: [ 'preact', 'semantic-ui-react', 'lodash' ]
}

webpack.output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/',
  filename,
  chunkFilename
}

// general loaders
webpack.module = {
  rules: [
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: [
          {loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
              sourceMap: true,
              plugins: [
                new LessPluginAutoPrefix(),
                new CleanCSSPlugin({
                  advance: true,
                  level: 2
                })
              ]
            }
          }
        ]
      })
    },
    {
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'src'),
      enforce: 'pre',
      loader: 'source-map-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.json/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?.*)?$/,
      loader: 'file-loader?name=[path]/[name].[ext]?[hash]'
    }
  ]
}

// general plugin
webpack.plugins.push(
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
)

webpack.plugins.push(
  new OfflinePlugin()
)

// resolve for preact
webpack.resolve = {
  extensions: ['.js'],
  alias: {
    'react': 'preact-compat',
    'react-dom': 'preact-compat',
    'containers': path.resolve(__dirname, 'src', 'containers'),
    'components': path.resolve(__dirname, 'src', 'components')
  }
}

module.exports = webpack
