// in this tutorial, we will learn how to use normal functions and function expression
//normally this is how we create functions
function myFunction (){
  console.log("normal function");
};
myFunction();
//another way is to create a "function expression"
var myFunctionExp = function(){
  console.log("function expression");
};
myFunctionExp();

//now we can also make a normal function call a function expression
//function caller
function callFunction(fun){
  fun();
}
//function to be called
var sayBye = function(){
  console.log('bye')
};

callFunction(sayBye);
//end of tutorial
