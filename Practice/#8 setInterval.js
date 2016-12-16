var time = 0;
var timer = setInterval(function(){
    console.log(time+ ' seconds have passed');
    time += 2;
    if(time > 8){
        clearInterval(timer);
    }
},2000);