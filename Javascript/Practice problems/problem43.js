//write a function called sumZero which accepts the sorted array of 
//integers. The function should find the first pair where the sum is 0 and 
//also return the values or undefined if pair does not exist.

//Naive approach of O(n2)

function  checkZero(arr){
    let n = arr.length;

    for(let i = 0;i<n;i++){
        for(let j=1;j<=n;j++){
            if(arr[i]+arr[j] == 0) return [arr[i],arr[j]];
        }
    }
}


//multiple pointer approach

function checkZero2(arr){
    n = arr.length;
    
    let left = 0;
    let right = n - 1;

    while(left <= right){
        let sum = arr[left] + arr[right];
        if(sum == 0) return [arr[left],arr[right]];
        else if(sum > 0) right--;
        else{
            left++;
        }
    }
}
let arr = [-3,-2,-1,0,1,2,3,4];
console.log(checkZero(arr));
console.log(checkZero2(arr));