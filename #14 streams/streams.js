var http = require('http');
var fs = require('fs');

var MyJunk = fs.createReadStream(__dirname+'/junk.txt','utf8');
var output = fs.createWriteStream(__dirname+'/out.txt');
MyJunk.on('data',function(chunk){
    console.log('new chunk received!:');
    output.write(chunk);
    //console.log(chunk);
});










/*
var server = http.createServer(function(req,res){
    console.log('Request was made'+ req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');

});

server.listen(3000,'127.0.0.1');
console.log('Yo, Server is listening to port 3000');
*/