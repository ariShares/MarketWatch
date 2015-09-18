var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('helo');
  // res.sendFile('index.html', {root : __dirname});
});

app.get('/ari', function(req, res) {
  res.sendFile('index.html', {root : __dirname});
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});