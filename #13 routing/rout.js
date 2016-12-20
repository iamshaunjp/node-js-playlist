var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request url:'+ req.url);
    if( req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if( req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }else if( req.url === '/api/json'){
        res.writeHead(200,'Content-Type':'application/json');
        var jso = [{ name:'saif', age:'18'}, { name:'aloe vera',age:'55'}];
        res.end(JSON.stringify(jso));
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html');

    }
   
});

server.listen(3000,'127.0.0.1');
console.log('Okay, your server is listing to port 3000');