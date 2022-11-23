/*
input: let arr = [1, 2, 3];
o: [1, 2, 4];

input: arr = [9]
o: [1, 0]

*/

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

const arr = [9];
const ans = plusOne(arr);
console.log(ans);

