var path             = require('path')
var webpack          = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  //devtool указываем, что нам нужен source-map 
  //для отладки кода с парой настроек
  devtool: 'cheap-module-eval-source-map',
  //entry - указывается откуда webpack'у начинать сборку
  entry: [
    //нужна нам для поддержки hot-reload, 
    //вместе с одним из плагинов - webpack.HotModuleReplacementPlugin
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  //output - куда сгенерировать
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    preloaders: [{
      test: '/\.js$/',
      loaders:['eslint'],
      include: [path.resolve(__dirname, "src")]
    }],
    loaders: [{
      loaders: ['react-hot', 'babel-loader'], //добавили loader 'react-hot'
      include: [path.resolve(__dirname, "src")],
      test: /\.js$/,
      plugins: ['transform-runtime'],
    }]
  }
}