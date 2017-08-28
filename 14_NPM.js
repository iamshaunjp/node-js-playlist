//Introduction to Express & nodemon
// First we need to define the project to keep track of our packages.
//The way we do this is write "npm init" in the cmd.
//Next install express by typing npm install express -save (hyphen + save)
// the -save function is to make sure it registers in the packages file for keeping track of things.
//to install nodemon, search it on npm and then follow the instructions.
// better to install nodemon globaly by adding -g "npm install -g nodemon"
//to use nodemon, just type "nodemon <app name>.js"
// nodemon will allow real-time updates to your page as soon as you modify and save your code.

//here we call the 'express' module
var express = require ('express');

var app = express();

//get the root directory and fire a function
app.get('/', function(req, res){
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});

//set it to listen to a port on the server
app.listen(3000);
