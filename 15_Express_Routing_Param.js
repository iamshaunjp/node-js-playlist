//in this tutorial we will learn how to use express route params
//lets install EJS to to make it easy to embed javascript code inside html tags
//to do that, we create a directory called 'view' and a file called profile.ejs which is basically and html file that accepts EJS code
var express = require ('express');
var app = express();
//let's set the view engine to use the ejs so we can embed javascript into html
app.set('view engine', 'ejs');


//get the root directory and fire a function using express
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
//now we will use EJS
app.get('/profile/:name',function(req,res){
  //res.sendFile('You requested to see a profile with the id of ' + req.params.name);
  //to use EJS we pass in the name of the view (profile.ejs)
res.render('profile', {person: req.params.name});
});
// an object passes the request params name
// no we go to the views/profile.ejs and call the profile
//set it to listen to a port on the server
app.listen(3000);
