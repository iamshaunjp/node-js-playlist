const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'hello!');
mary.emit('speak', 'cześć!');
ryu.emit('speak', 'asdf');
