// Remove the specific elements in the array

function removeElement(arr, elem) {
    var i;
    let n = arr.length;
    for (i = 0; i < n; i++) {
        if (arr[i] === elem) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

var arr = [1, 2, 3, 4, 5, 2];
var elem = 2;
var z = removeElement(arr, elem);
console.log(z);
