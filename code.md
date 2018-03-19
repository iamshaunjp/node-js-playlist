## nodejs 

1. function expressions
```javascript
[app.js]
function func() {
    console.log("Hello, World!");
}
func();

// function expression
var func2 = function() {
    console.log("Hello, World!");
}
func2();

// passing a function into another function
function callFunction(funcarg) {
    funcarg();
}
callFunction(func2);
```
___
2. modules and require()
```javascript
[cat.js]
var cat = function(arr1, arr2) {
	return arr1.concat(arr2);
}
module.exports = cat;
```

```javascript
[app.js]
var cat = require("./cat.js");
var merge = cat([1,2,3],[2,3,4]);
console.log(merge);
```
___
3. module patterns (first method)
```javascript
[stuff.js]
var cat = function(arr1, arr2) {
	return arr1.concat(arr2);
}

var add = function(a, b) {
	return a + b;
}

var pi = 3.1415;

// module.exports is an empty object
module.exports.cat = cat;
module.exports.add = add;
module.exports.pi = pi;
```

```javascript
[app.js]
var stuff = require("./stuff.js");

console.log(stuff.cat([1, 2, 3], [2, 3, 4]));
console.log(stuff.add(1, 1));
console.log(stuff.pi);
```
___
4. module patterns (second method)
```javascript
[stuff.js]
module.exports.cat = function(arr1, arr2) {
	return arr1.concat(arr2);
}

module.exports.add = function(a, b) {
	return a + b;
}

module.exports.pi = 3.1415;
```

```javascript
[app.js]
var stuff = require("./stuff.js");

console.log(stuff.cat([1, 2, 3], [2, 3, 4]));
console.log(stuff.add(1, 1));
console.log(stuff.pi);
``` 
___
5. node event emitter
```javascript
[app.js]
var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
	console.log(msg);
});

myEmitter.emit('someEvent', "Hello, World!");
```
___
6. util.inherits
```javascript
[app.js]
var events = require('events');
var util = require('util');

var Person = function(name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var eric = new Person('eric');
var steven = new Person('Steven');
var john = new Person('John');
var persons = [eric, steven, john];

persons.forEach(function(person) {
	person.on('speak', function(msg) {
		console.log(person.name + " says: " + msg);
	});
});

eric.emit('speak', 'I am Eric!');
```
___
7. reading and writing a file (synchronous)
```javascript
[app.js]
var fs = require('fs');

// readFileSync is a synchronous method 
var testRead = fs.readFileSync('testRead.txt', 'utf8');		
console.log(testRead);

fs.writeFileSync('testWrite.txt', testRead);
```
___
8. reading and writing a file (asynchronous)
```javascript
[app.js]
var fs = require('fs');

// readFile is an asynchronous method
fs.readFile('testRead.txt', 'utf8', function(error, data) {
	console.log(data);
	fs.writeFile('testWrite.txt', data);
});
console.log("test");

// output ->
// test
// This is a test file.

// deleting a file
fs.unlink('./testRead.txt');
```
9. creating and removing directories (synchronous)
```javascript
[app.js]
var fs = require('fs');

fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
```
___
10. creating a directory (asynchronous)
```javascript
[app.js]
fs.mkdir('stuff', function() {
	// callback function
	fs.readFile('testRead.txt', 'utf8', function(error, data) {
		fs.writeFile('./stuff/testWrite.txt', data);
	});
});
```
___
11. removing a directory (asynchronous)
```javascript
[app.js]
// fs.rmdir('stuff')
// Error: ENOTEMPTY: directory not empty, rmdir 'stuff'

fs.unlink('./stuff/testWrite.txt', function() {
	fs.rmdir('stuff');	
});
```
___
12. creating a server
```javascript
[app.js]
var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, World!');
	console.log(request);
	console.log(response);
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");
```
___
13. readable streams
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt');
// var readStream = fs.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});

readStream.on('data', function(chunk) {
	console.log(chunk);
});
```
___
14. writable streams
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function(chunk) {
	console.log(chunk);
	writeStream.write(chunk);
});
```
___
15. pipes 
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.pipe(writeStream);
```
___
16. using piping to send data to a user
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	// response object is a writable stream
	response.writeHead(200, {'Content-Type': 'text/plain'});
	var readStream = fs.createReadStream(__dirname + '/readMe.txt');
	readStream.pipe(response);
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");
```
___
17. serving JSON data
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	var obj = {
		name: 'eric',
		age: '20',
		school: 'stanford' 
	};
	response.end(JSON.stringify(obj));
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");
```
___
18. basic routing 
```javascript
[app.js]
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	if(request.url === '/home' || request.url === '/') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(response);
	} 
	else if(request.url === '/contact') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(response);
	} 
	else if(request.url === '/api') {
		var obj = [{classifier: 'SVM', optimizer: 'SGD'}];
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(obj));
	}
	else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(response);
	}
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");
```
___
19. express.js
```javascript
[app.js]
var express = require('express');
var app = express();                                           

app.get('/', function(request, response) {
	response.send('home page');
        // response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(request, response) {
	response.send('contact page');
        // response.sendFile(__dirname + '/contact.html');
});

// route params
app.get('/profile/:id', function(request, response) {
	response.send(request.params.id);
});

app.listen(8000);
```
___
20. template engines
```javascript
[app.js]
var express = require('express');
var app = express();   

app.set('view engine', 'ejs');   

app.get('/profile/:id', function(request, response) {
	var data = {age: 20, country: 'India'};
	response.render('profile', {id: request.params.id, data: data});
	// response.send(request.params.id);
});

app.listen(8000);
```
```html
[profile.ejs]
<body>
    <h1>Profile Page</h1>
    <p><%= id %></p>
    <p>age: <%= data.age %></p>
    <p>country: <%= data.country %></p> 
</body>
```
___
21. query strings and post requests
```javascript
[app.js]
var fs = require('fs');
var express = require('express');
var app = express();   
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');   

app.use('/assets', express.static('assets'));

app.get(['/', '/home'], function(request, response) {
	response.render('index.ejs');
	// response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(request, response) {
	response.render('contact.ejs', {qs: request.query});
});

app.post('/contact', urlencodedParser, function (request, response) {
	// console.log(request.body);
  	response.render('contact-success', {data: request.body});
})

app.get('/nodejs', function(request, response) {
	var path = __dirname + '/nodejs.html';
	response.sendFile(path);
});

app.get('/profile/:id', function(request, response) {
	var data = {age: 20, country: 'India', favs: ['aa', 'bb', 'cc']};
	response.render('profile.ejs', {id: request.params.id, data: data});
	// response.send(request.params.id);
});

app.get('*', function(request, response) {
	response.render('404.ejs');
	// response.status(404).sendFile(__dirname + '/404.html');
});

app.listen(8000);
```









