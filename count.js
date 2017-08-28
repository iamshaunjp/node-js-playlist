// we need to export this module so we can import it in app2

//lets create a function expression
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

//now we need to export the module to use it in app2
module.exports = counter; //this will export the function expression "counter"
