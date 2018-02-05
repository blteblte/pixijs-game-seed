const path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
  module: {
    loaders: [
        {
            test: /\.(ts|tsx)$/,
            loader: 'awesome-typescript-loader'
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};