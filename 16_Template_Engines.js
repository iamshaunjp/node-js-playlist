var express = require ('express');
var app = express();
//let's set the view engine to use the ejs so we can embed javascript into html
app.set('view engine', 'ejs');


//get the root directory and fire a function
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
//now we will use EJS
app.get('/profile/:name',function(req,res){
//let's make an array of objects
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
//unlike with the html pages, to use ejs pages, we need to use "render" instead of "sendFile"
res.render('profile', {person: req.params.name, data: data});
//now let's go to profile.ejs and output those data
});

app.listen(3000);
