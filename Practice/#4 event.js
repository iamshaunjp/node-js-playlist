var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

myEmmitter.emit('anEvent','The event is absolutely emmited');