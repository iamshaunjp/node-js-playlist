//in this tutorial we will learn how to read text using streams
var http = require('http');
var fs = require('fs');
// we are going to read LongText.txt
var myReadStream = fs.createReadStream(__dirname + '/LongText.txt', 'utf8');
//Returns a new stream object

myReadStream.on('data',function(chunk){
  console.log('************************new chunk recieved:***************************');
  console.log(chunk);
});
