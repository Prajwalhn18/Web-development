// //Bubble sort implementation

// function swapNumbers(arr, num1, num2) {
//     let temp = arr[num1];
//     arr[num1] = arr[num2];
//     arr[num2] = temp;
//     // return arr;
//     // [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
// }

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swapNumbers(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// let a = [1, 23, 4, 12, 10, 9, 3];
// let sortedArr = bubbleSort(a);
// console.log(sortedArr);

// -----------------------------------------------

//fibonacci series

// function fib(n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(9));

//using iteration

// function fib(n) {
//     let f = new Array(n + 2);
//     let arr = [0, 1];
//     f[0] = 0;
//     f[1] = 1;
//     for (let i = 2; i <= n; i++) {
//         f[i] = f[i - 1] + f[i - 2];
//         arr.push(f[i]);
//     }
//     return arr;
// }

// console.log(fib(10));

// ----------------------------------------------------------------------

//reversing a number

// function reverseNumber(n) {
//     let revNum = 0;

//     while (n > 0) {
//         revNum = revNum * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return revNum;
// }

// console.log(reverseNumber(1234));

//palindrome or not

// let number = 1214;
// let revNum = reverseNumber(121);

// if (number == revNum) console.log("palindrome");
// // else console.log("not a palindrome");

// //palindrome of a string

// function palindromeString(str) {
//     let originalStr = str.split("");
//     // console.log(originalStr);
//     let n = originalStr.length;
//     let reverseStr = [];

//     for (let i = n - 1; i >= 0; i--) {
//         reverseStr.push(originalStr[i]);
//     }
//     let reverseString = reverseStr.join("");
//     // console.log(reverseStr.join(""));
//     // console.log(str);

//     if (str == reverseString) console.log("string is palindrome");
//     else console.log("Not a palindrome");
// }

// palindromeString("raceca");

// let string1 = "silnt";
// let str1 = string1.split("").sort().join("");
// let string2 = "listen";
// let str2 = string2.split("").sort().join("");
// if (str1 == str2) console.log("anagram");
// else console.log("not anagram");

// With arrow functions, the "this" keyword refers to its current surrounding scope, unlike regular functions!

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
// output : 20 and NaN
