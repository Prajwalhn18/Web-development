// write a function which checks , two arrays and return true if arr2 has the elements that are the squares of arr1 else return false.

/*

[1,2,3] & [4,1,9] return true
[1,2,3] & [1,9] return false
[1,2,1] & [4,4,1] return false (frquencies must be same)

*/

// O(n)

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

// O(n2)
function same2(arr1,arr2){
if(arr1.length !== arr2.length) return false;

for(let i =0;i<arr1.length;i++){
    for(let j =0;j<arr2.length;j++){
        if(arr1[i] === arr2[j]**2) return true;
        else{
            return false;
        }
    }
}

}

let arr1 = [1,2,3];
let arr2 = [1,9];
console.log(same(arr1,arr2));
console.log(same2(arr1,arr2));