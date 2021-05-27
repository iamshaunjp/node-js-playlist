var events = require('events');



let util = require('util');
let Person = function(name)  {
    this.name = name;
};
util.inherits(Person,events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let people = [james, mary];

people.forEach(person=>{
    person.on('speak',
    massage=>{console.log(person.name+' said '+massage);
    });
});

james.emit('speak','hay');