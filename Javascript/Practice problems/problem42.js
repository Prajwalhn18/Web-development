// write a function which checks , two arrays and return true if arr2 has the elements that are the squares of arr1 else return false.

/*

[1,2,3] & [4,1,9] return true
[1,2,3] & [1,9] return false
[1,2,1] & [4,4,1] return false (frquencies must be same)

*/


//O(n) using frequency counter

function sameSquare(arr1,arr2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
    }

    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2))return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
    }
    return true;
}

// O(n2)

function same(arr1,arr2){
    let x = arr1.length;
    let y = arr2.length;

    //if length are not equal
    if(x !== y) return false;

    for(let i = 0;i<arr1.length;i++){
        var curr = arr2.indexOf(arr1[i] ** 2)
        if(curr === -1) return false;

    }
    arr2.splice(curr,1);
    return true;


}
let arr1 = [1,2,3];
let arr2 = [1,4,9];
console.log(sameSquare(arr1,arr2));
console.log(same(arr1,arr2));
console.log(same2(arr1,arr2));