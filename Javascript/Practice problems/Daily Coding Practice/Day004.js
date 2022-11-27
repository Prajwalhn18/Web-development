/*
Valid Parentheses
--
Input: const str = "()";
Output: true

Input: const str = "(]";
Output: false

understanding the solution:
    -> Declacre an empty array
    -> Store the length of the string that is passed in len i.e 
        const len = str.length;
    -> Declare an object with key values: '(' : ')' -> similarly for the rest.
    -> Loop through the object and match the arr with the map object if length > 0;
    -> if array length < 0; then push the Parentheses; then continue
*/

const isValid = (str) => {
    let arr = [];
    const len = str.length;
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for (let i = 0; i < len; i++) {
        if (arr.length > 0 && map[arr[arr.length - 1]] === str[i]) {
            arr.pop();
        } else {
            arr.push(str[i]);
        }
    }
    return arr.length === 0;
}

const str = "()";
console.log(isValid(str));