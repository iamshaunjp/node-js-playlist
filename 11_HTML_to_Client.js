//in this tut, we are oging to serve HTML page to a client
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  //200 means everything is ok. 404 means something is wrong
  res.writeHead(200, {'Content-Type': 'text/html'}); // change this to html type
  var myReadStream = fs.createReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
  myReadStream.pipe(res);
  //res.end('Hey ninjas'); we don't need to end it; pipe does it auto.
});
// we can also choose a different port, like 8080
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
// make sure to control+c to cancel listening in the cmd
