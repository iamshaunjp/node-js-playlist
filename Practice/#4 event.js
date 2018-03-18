var EventEmitter = require('events');

var myEmmitter = new EventEmitter();

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

myEmmitter.emit('anEvent','The event is absolutely emmited');
