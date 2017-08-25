//let's create 3 functions to export
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};
var adder = function(a,b){
  return `The sum of the 2 numbers are ${a+b}`; //notice we used ` instead of '
  //this is another way to embed text with variables
};
var pi = 3.142;

//now we can use "Object-literal notation" to export all objects as properties
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
