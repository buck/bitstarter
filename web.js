var express = require('express');
var fs = require('fs');
var infile = 'index.html';

var app = express.createServer(express.logger());

var contents = fs.readFileSync(infile).toString();

var buffer = new Buffer(fs.readFileSync(infile).toString());
// buffer.write(fs.readFileSync(infile).toString());

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
