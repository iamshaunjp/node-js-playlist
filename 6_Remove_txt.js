var fs = require('fs');
//to remove it, you need to remove the file first
fs.unlink('./stuff/AnotherFile.txt',function(){
  fs.rmdir('stuff');
});
