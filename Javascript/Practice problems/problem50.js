//program to convert binary to decimal

function binToDec(n){
    let ans = 0;
    let x = 1;

    while(n > 0){
        let y = n % 10;
        ans += x * y;
        x *= 2;
        n = Math.floor(n/10);
    }
    return ans;
}

console.log(binToDec(111));