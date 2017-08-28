// in this tutorial we will learn how to call functions from other Modules(Classes)

//First, we need to create "count.js" as another module let's go there!

// After exporting the count module we call it
var counter = require ('./count'); //require means it will use the count module

console.log(counter(['shaun','crystal','yusufu']));
