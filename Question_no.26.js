//PROBLEM #26
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

function factors(n) {

 if ( n == 1 || n == 0 ) { return [n]; }
 var a = [1];
 var i = 2;
 var max = n;

 while ( i < max) {

     if ( n % i == 0 ) {
         a.push(i);       

         if ( i != (n/i) ) {
             a.push( (n/i) );
         }
         max = (n/i);
     }
     i++;
 }
 return  a.sort(function sortFunc(a,b) {return a - b;});
}

/*function factors(integer){
var factors = [],
quotient = 0;
for(var i = 1; i <= integer; i++){
 quotient = integer/i;
 if(quotient === Math.floor(quotient)){
 factors.push(i);
}
}
return factors;
}

getFactors(220);*/
function sumarray(a) {
 var sum = 0;
 for (var i in a) {
    sum = sum + a[i];
 }
 return sum;
}

//if (sum > n)
function amicnum(n) {
 var a = sumarray(factors(n));
 var b = sumarray(factors(a));
 return ( b == n );
}

var sumamicnums = 0;
for (var i=1; i < 10000; i++) {
 if ( amicnum(i) ) {
 sumamicnums = sumamicnums + i;
 }
}

console.log(sumamicnums);
})
.listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');