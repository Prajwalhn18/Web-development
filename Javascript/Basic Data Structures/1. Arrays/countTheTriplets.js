// Count the number of triplets.

function findTriplets(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = n - 1; i >= 0; i--) {
    let j = 0;
    let k = i - 1;

    while (j < k) {
      if (arr[i] == arr[j] + arr[k]) {
        console.log("The triplets are " + arr[i] + " " + arr[j] + " " + arr[k]);
        return;
      } else if (arr[i] > arr[j] + arr[k]) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  console.log("No triplets found");
}

let arr = [1, 2, 3, 4];
let n = arr.length;

findTriplets(arr, n);
