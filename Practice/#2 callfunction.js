function callFunction(fun){
 fun();
}

var tata = function(){
    console.log('bye');
}

callFunction(tata);