// This is the module getting function. it gets its module from moduleexp.js

var stuff = require('./moduleexp.js');// | ./ | is used to search in present directory.


// look here at the counter part, it is actually taking the arguments. and doing everything.
// We need to intialise the 'counter variable first.'
console.log(stuff.counter(['Hello','This is','Saif']));
console.log(stuff.adder(5,6));
console.log(stuff.bi);
console.log(stuff.adder(stuff.bi,44));