var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');
var path = require('path');
var fs = require('fs');

var mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = function() {

  //fire up webpack
  var bundleStart = null;
  var compiler = webpack(webpackConfig);

  //give note in terminal when it starts
  //and set the time it started
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  //give note when its done
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new webpackDevServer(compiler, {
    //tell webpack to serve bundled application from build path
    //when proxying: http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/build/',

    //configure hot replacement
    hot: true,

    //terminal configs
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  //fire up dev server
  bundler.listen(8080, 'localhost', function() {
    console.log('Bundling project for ' + process.env.NODE_ENV + ', please wait...');
  });

};
