function missingNumber(arr, n) {
  let sumOfN = Math.floor(((n + 1) * (n + 2)) / 2);

  for (let i = 0; i < n; i++) sumOfN -= arr[i];
  return sumOfN;
}

var a = [1,2,3,4,5,6];
let n = a.length;

var number = missingNumber(a, n);
console.log(number);
