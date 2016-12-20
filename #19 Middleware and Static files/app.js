

var express = require('express');
var app = express();


// This line below tells the node that, to set view engine as ejs engine.
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){  
    res.render('index');
});
app.get('/contact',function(req,res){
    res.render('contact');
});
app.get('/profile/:name',function(req,res){
   var data = { age: '29',job: 'Ninja', hobbies:[ 'Eating','sleeping','programming']}; 
   res.render('profile',{ person: req.params.name, data : data});
});

app.listen(3000);

// Note: To set up, the files