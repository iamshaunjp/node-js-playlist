//in this tutorial we will learn how to use some global functions for V8
//console.log('hey ninjas');
/*setTimeout(function(){
  console.log('3 seconds have passed');
}, 3000)
*/
//setInterval and clearInterval are both global variables offered by V8
var time = 0;
var timer = setInterval(function(){
  time +=2;
  console.log(time +' seconds have passed');
  if (time > 5){
    clearInterval(timer);
  }
},2000)
// to find the dierectory of a folder or the file write this
console.log(__dirname);
console.log(__filename);
//end of tutorial
