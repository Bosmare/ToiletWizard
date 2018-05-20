var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
	entry: [
    'babel-polyfill',
		path.join(__dirname, './src/index.js')
  ],
  module: {
		rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(html|css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
          {
            loader: "react-svg-loader",
            options: {jsx: true}
          }
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  }
}