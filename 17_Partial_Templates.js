var express = require ('express');
var app = express();
//let's set the view engine to use the ejs so we can embed javascript into html
app.set('view engine', 'ejs');


//get the root directory and fire a function
app.get('/', function(req, res){
  res.render('index');
});
app.get('/contact', function(req, res){
  res.render('contact');
});
//now we will use EJS
app.get('/profile/:name',function(req,res){
//let's make an array of objects
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('profile', {person: req.params.name, data: data});
//now let's go to profile.ejs and output those data
});
//bla bla
app.listen(3000);
