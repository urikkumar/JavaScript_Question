//problem #23

//A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n
//all integers greater than 28123 can be written as the sum of two abundant numbers.
//smallest number that can be written as the sum of two abundant numbers is 24
//find all abundant numbers and remove them from the list
//find all the abundant no.s
//find sum of two abundants
//select all no.s which can not bewritten as sum of two abundant no.s
//sum all no.s whichs can not be written as su of two abundant no.s
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

function divisors(num) {

    var a = [];
    for (var i = 1; i < Math.floor(num / 2) + 1; i++) {

        if (num % i === 0) {
            a.push(i);
        }
    }
    return a;
}


function isabundant(num) {
// checks if the no is abundant .
    var divs = divisors(num);
    var s = sum(divs);

    if (s > num) {   
        return true;
    }
    return false;
}

function abundants() {

    var a = [];
//find all abundants
    for (var i = 0; i <= 28123; i++) {
    
        if (isabundant(i)) {
            //console.log( + i);           
            a.push(i);
        }
    }
    return a;
}

function notsumsofabundants(abundants) {

    var o = new Object();
    var p;
    var a = [];

    for (var i = 0; i < abundants.length; i++) {
        //console.log(sumsOfTwoAbundants i);
        // o[p] contains sum of two abundants
        for (var j = 0; j < abundants.length; j++) {
            p = abundants[i] + abundants[j];
            o[p] = true;
        }
    }
    //a contai ignores not sum of two abundants 
    for (var k = 1; k <= 28123; k++) {
        //console.log( + k);
        if (!o[k]) {
            a.push(k);
        }
    }
    return a;
}


function sum(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
//start here
var x = abundants();
var  y= notsumsofabundants(x);
var z = sum(y);

console.log(z);
})
.listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');

