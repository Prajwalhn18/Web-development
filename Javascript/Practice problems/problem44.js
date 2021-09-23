// count unique values

//only works with the sorted array

function countUniqueValues(arr){
    let n = arr.length;
    if(n == 0) return 0;
    
    let i = 0;
    for(let j = 1;j < n;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
            
    }
    return i+1;
}


let arr = [1,1,2,3,4,5,6,6,7,7,8,8];
console.log(countUniqueValues(arr));
