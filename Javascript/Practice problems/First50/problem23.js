// Output the number that doesn't repeat.

function findNoRepeatNumber(arr) {
    let n = arr.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
}

let a = [1, 1, 2, 2, 3, 4, 4];
console.log(findNoRepeatNumber(a));
