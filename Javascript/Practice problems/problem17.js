//Add two numbers represented by two arrays

/**
 Algorithm:
 - calculate the length of two arrays
 - pass the parameters accordingly to the utility function
 - perform the sum operation, do not forget to take the carry if present.
 - assign the carry to 0, if carry found append 1 to total sum
 */

 function helperFunction(a,b,n,m){
    let sum = new Array(n);
    let i = n-1, j = m-1, k = n-1;
    let carry = 0, s = 0;

    while(j >= 0){
        s = a[i] + b[j] + carry;
        sum[k] = (s % 10);
        carry = Math.floor(s/10);
        k--;
        i--;
        j--;
    }

    while(i >= 0){
        s = a[i] + carry;
        sum[k] = (s%10);
        carry = Math.floor(s/10);
        i--;
        k--;
    }

    let ans = 0;

    if(carry) 
        ans = 10;

    for(let i = 0; i <= n-1; i++){
        ans += sum[i];
        ans *= 10;
    }
    return ans/10;

 }

 function calculateSum(a,b,n,m){

    if(n >= m) {
        return helperFunction(a,b,n,m);
    }
    else{
     return helperFunction(b,a,m,n)
    }
    }

let a = [1,2];
let b = [3,4];

let n = a.length;
let m = b.length;

let z = calculateSum(a,b,n,m);
console.log(z);