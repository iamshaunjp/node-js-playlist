var fs = require('fs');

var file = fs.readFile('input.txt','utf8',function(err,data){
    fs.writeFile('writeme.txt',data, function(err) {
        if(err) throw err;
        console.log('The file has been saved!');
    });
    console.log(data);
});

console.log('This is an instruction outside the sync file system.');
