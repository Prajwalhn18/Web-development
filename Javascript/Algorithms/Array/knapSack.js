function max(a, b) {
  return a > b ? a : b;
}

function knapSack(max_weight, weight, value, arrayLength) {
  if (arrayLength == 0 || max_weight == 0) {
    return 0;
  }

  if (weight[arrayLength - 1] > weight) {
    return knapSack(max_weight, weight, value, arrayLength - 1);
  } else {
    return max(
      val[arrayLength - 1] +
        knapSack(
          max_weight - weight[arrayLength - 1],
          weight,
          value,
          arrayLength - 1
        ),
      knapSack(max_weight, weight, value, arrayLength - 1)
    );
  }
}

let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;

console.log(knapSack(W, wt, val, n));
