// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function arraySplit(arr,size){
    let newArray = [];

    for(let i = 0; i < arr.length;i += size){
        newArray.push(arr.slice(i,i+size));
    }

    return newArray;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(arraySplit(arr,4));

