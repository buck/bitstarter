var express = require('express');
var fs = require('fs');
var infile = 'index.html';

var app = express.createServer(express.logger());

var contents = fs.readFileSync(infile).toString();

var buffer = new Buffer(1000);
buffer.write(fs.readFileSync(infile,{encoding: 'utf-8', flag: 'r'}));


app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
