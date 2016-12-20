

var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Your are at home page');
});
app.get('/contact',function(req,res){
    res.send('Youre at conctact page');
});
app.get('/profile/:id',function(req,res){
    res.send('You requested an user with ID of '+ req.params.id);
});

app.listen(3000);