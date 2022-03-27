var sortedSquares = function (nums) {
    var n = nums.length;
    var squares = [];
    for (let i = 0; i < n; i++) {
        squares[i] = nums[i] * nums[i];
    }
    var z = squares.sort((a, b) => a - b);
    return z;
};

var nums = [1, 2, 3, 4];
console.log(sortedSquares(nums));
