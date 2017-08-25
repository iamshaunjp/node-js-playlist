// in this tutorial, we will learn about creating a server
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  //200 means everything is ok. 404 means something is wrong
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});
// we can also choose a different port, like 8080
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
// make sure to control+c to cancel listening in the cmd
