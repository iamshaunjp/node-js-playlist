var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb+srv://pulsara:test@cluster0-zim8l.mongodb.net/test?retryWrites=true&w=majority');

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item:String
});

//create model called Todo
var Todo = mongoose.model('Todo',todoSchema);
var itemOne = Todo({item:'get flowers'}).save(function(err){
    if(err) throw err;
    console.log('item saves');
})

var data = [ {item:'cdddd'},{item:'vcvcvc'},{item:'ccvc'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

app.get('/todo',function(req,res){
    //get data from mongoDb and pass it to view
Todo.find({},function(err,data){
    if(err) throw err;
    res.render('todo', {todos:data});
});

});

app.post('/todo', urlencodedParser, function (req, res) {
    //get data from the veiw and add it to mongodb

    var newTodo = Todo(req.body).save(function(err,data){
    if (err) throw err;
    res.json(data);
    });
  //data.push(req.body);

})

app.delete('/todo/:item',function(req,res){
    //delete the requested item from db

    Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});

};