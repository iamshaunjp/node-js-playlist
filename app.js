var express = require ('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);

//static files
app.use(express.static('public'));


//fire controllers
todoController(app);
//listen to port
app.listen(3000);
console.log('you are listening to port 3000');
