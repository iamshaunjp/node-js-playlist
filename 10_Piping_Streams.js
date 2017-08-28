//in this tutorial, we are going to learn how to use piping and stream our text on the server

var http = require('http');
var fs = require('fs');



var http = require('http');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  //200 means everything is ok. 404 means something is wrong
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/LongText.txt', 'utf8');
  //Returns a new stream object
  myReadStream.pipe(res);
});
// we can also choose a different port, like 8080
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
// make sure to control+c to cancel listening in the cmd
