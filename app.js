var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

// Set up template engine

app.set('view engine', 'ejs');

// static files
// if we didn't specify the url path, then express will use the default when '/'
app.use(express.static('public'));


// fire the controller
todoController(app);

// listen to port
// if we didn't provide the host name, than the host name will be 0.0.0.0 by default
app.listen(3000, '0.0.0.0');
console.log('You are listening to port 3000.')

