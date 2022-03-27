// Rotate an array

var rotateArray = (arr, k) => {
    k = k % arr.length;
    var len = arr.length - 1;
    reverse(arr, 0, len - k);
    reverse(arr, len - k + 1, len);
    reverse(arr, 0, len);
    return arr;

    function reverse(nums, l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
};

// var numbers = [1,2,3,4,5,6,7];
var numbers = [-1, -100, 3, 99];
var k = 2;

console.log(rotateArray(numbers, k));
