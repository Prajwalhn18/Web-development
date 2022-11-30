// Find the largest two digit number within the given integers

function findLargeNumbers(nums) {
    var n = nums.toString().length;
    console.log('length:' + n);
    var iDigits = nums.toString().split('');
    console.log(iDigits.sort());

    let maxNums = parseInt(iDigits[n - 1]) * 10 + parseInt(iDigits[n - 2]);
    return maxNums;
}

let nums = 123456124879987;
console.log(findLargeNumbers(nums));
