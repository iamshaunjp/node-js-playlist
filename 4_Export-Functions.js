// in this tutorial, we will learn how to export more than one funciton
// we will use "stuff" module to help with that
// lets go to the stuff file first
//after we have exported the functions as properties

var stuff = require('./stuff');

console.log(stuff.counter(['shaun','yusuf','thirdguy']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5)); //notice we always call "stuff" properties
