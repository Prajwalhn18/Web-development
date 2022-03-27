var rob = function (nums) {
    let n = nums.length;

    var dp = Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (var i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[n - 1];
};

let arr = [1, 2, 3, 1];
console.log(rob(arr));
