// plus  one

function addOne(digits) {
    var n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}

var arr = [1, 2, 3, 9];
console.log(addOne(arr));
