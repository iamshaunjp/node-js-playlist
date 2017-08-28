//in this tut, we are going to send back json string back when visiting a page

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
//make sure to change the 'Content-Type: ' to 'application/json'
  res.writeHead(200, {'Content-Type': 'application/json'});
//lets create a variable with objects
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  //now we send my object as a stringified version as JSON response
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
