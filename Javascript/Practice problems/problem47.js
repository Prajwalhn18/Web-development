// program to print all the prime number between two given numbers


function isPrime(n){
    for(let i = 2;i<Math.sqrt(n);i++){
        if(n%i == 0) return false;
    }
    return true;
}
function printAllPrime(a,b){
    for(let i = a; i <=b;i++){
        if(isPrime(i)) console.log(i);
    }
}

var a = 10;
var b = 20;

printAllPrime(a,b);