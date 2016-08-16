var express = require('express');
var Firebase = require('firebase');
var httpProxy = require('http-proxy');

//initialize Firebase
Firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
});

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3001;

//point to static assests
app.use(express.static('public'));

//only run workflow when not in production
if(!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();

  //all requests to localhost:3000/build is proxied
  //to webpack-dev-server
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

//catch errors from the proxy
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
})

//run server
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
