//in this tutorial, we will attempt to read a readme.txt
var fs = require('fs');
var readMe = fs.readFileSync('readme.txt', 'utf8');
console.log(readMe);
// another way of reading a file is

fs.readFile('readme.txt', 'utf8', function(err, data){
  console.log(data + ' again!');
  // now, to write a file using data file which refers to the readme.txt:
  fs.writeFile("writeMe.txt", data);
});

// to create a directory
fs.mkdir("stuff");
// to remove it
//fs.rmdir('stuff');

//to remove file
//fs.unlink('writeMe.txt');

//to create a file inside a folder 'stuff'
fs.writeFileSync('./stuff/AnotherFile.txt', 'utf8')
