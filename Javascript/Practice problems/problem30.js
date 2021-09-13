//  Count the minimum steps to get the desired array

function countMinSteps(n) {
  let res = 0;

  while (true) {
    let zeroCount = 0;
    let i;
    for (i = 0; i < n; i++) {
      if (arr[i] % 2 == 1) break;
      else if (arr[i] == 0) zeroCount++;
    }
    if (zeroCount == n) return res;

    if (i == n) {
      for (let j = 0; j < n; j++) arr[j] = arr[j] / 2;
      res++;
    }

    for (let j = i; j < n; j++) {
      if (arr[j] % 2 == 1) {
        arr[j]--;
        res++;
      }
    }
  }
}

let arr = [16, 16,16];
var n = arr.length;
console.log(countMinSteps(n));
