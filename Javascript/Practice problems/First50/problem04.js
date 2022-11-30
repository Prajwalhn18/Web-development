//reverse the given integer

function reverse(n) {
    var num,
        res = 0;
    console.log('The actual number is: ' + n);
    while (n) {
        num = n % 10;
        res = res * 10 + num;
        n = (n / 10) | 0;
    }
    console.log('The reverse of the number is ' + res);
    return;
}

var x = 123;
reverse(x);
