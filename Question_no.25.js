//PROBLEM #25
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
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
})
.listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');
