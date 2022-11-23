/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.
*/

const removeElement = (arr, val) => {
    const n = arr.length;
    let res = []
    let numberLength = n;
    for (let i = 0; i < n; i++){
        if (val == arr[i]) {
            res.push('_');
            numberLength--;
        }
        res.push(arr[i]);
    }
    return numberLength;

}

let arr = [2,2,3,3];
console.log(removeElement(arr, 3));