var express = require("express");
var app = express();

  
function fib(n)

{
 if (n <= 1)
  {
     return n;
  }
 else
 {
   return fib(n-1) + fib(n-2);
 }
}


var x=Math.pow(10,3)
//console.log(x)
for (var i = 0; i <= 20; i += 1) {
 //console.log(fib(i));
 if (fib(i) >= x)
  {
   console.log(i);
   break;
   }
}
});
app.listen(1337);
console.log('successful');