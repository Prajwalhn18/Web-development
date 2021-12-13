//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input may have exactly one solution.

/*
Algo:
- take the target
- traverse the array by checking each element will add up to target or not
- print the matching indices

*/

function findI(arr, n, t) {
  var n, t;
  /* 
  This code works only when we have both numbers consecutively
  for(var i = 0;i < n;i++){
        if(arr[i]+arr[i+1] == t){
            console.log(i,i+1);
            return;
        }
    } */

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr[i] + arr[j] == t) {
        console.log("The indices are " + i, j);
      }
    }
  }

  console.log("No such elements add up to the target");
}

let arr = [1, 3, 2, 4, 7, 15, 6, 11];
let size = arr.length;
let target = 9;

findI(arr, size, target);
