//in this tutorial, we are going to write streams from one file into Another

var http = require('http');
var fs = require('fs');
// we are going to read LongText.txt
var myReadStream = fs.createReadStream(__dirname + '/LongText.txt', 'utf8');
//Returns a new stream object
//now we shall create the write stream method
var myWriteStream = fs.createWriteStream(__dirname + '/writeMeLong.txt');
//notice, we do not need to specify the data coding type

myReadStream.on('data',function(chunk){
  console.log('************************new chunk recieved:***************************');
  //console.log(chunk); we don't need to display it anymore
  //now we write it into the file, but this time one chunk at a time
  myWriteStream.write(chunk);
  // now writeMeLong.txt should be created with the copied text from LongText.txt
});
