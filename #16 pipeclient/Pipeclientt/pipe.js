var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req,res){
      res.writeHead(200,{'Content-Type':'text/html'});
      var MyJunk = fs.createReadStream(__dirname+'/index.html','utf8');
      MyJunk.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log('Yo, Server is listening to port 3000');
