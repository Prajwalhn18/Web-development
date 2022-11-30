// Fibonacci series

/*
Recursive 
function fib(n){
    if(n <= 1) return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(10));


*/

//Dynamic programming

function fib(n) {
    let fibA = new Array(n + 2);
    let i;

    fibA[0] = 0;
    fibA[1] = 1;

    for (i = 2; i <= n; i++) {
        fibA[i] = fibA[i - 1] + fibA[i - 2];
    }
    return fibA[n];
}

console.log(fib(10));
