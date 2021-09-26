// Binary Search

/*
- compare the entered element with the mid element of the array
- if x > mid, search towards RIGHT of mid
- if x < mid, search towards LEFT of mid
- the array element must be arranged in the descending order.
*/

// function binarySearch(arr,l,u,searchElement){
//   if(u >= 1){
//       var mid = Math.floor((l+u)/2); 
//   }

//   if(arr[mid] == searchElement){
//       console.log(mid);
//       return mid;
//   }
//   else if(arr[mid] > x){
//       return binarySearch(arr,l,mid-1,x)
//   }

//   else if(arr[mid] < x){
//       return binarySearch(arr,mid+1,u,x)
//   }
//   else{
//       console.log("Enter the proper element that can be searched in the array.");
//   }
    
// }

// let arr = [1,10,12,16,23,27,30];
// let x = 10;
// let len = arr.length;
// let res = binarySearch(arr,0,len-1,x);



function binarySearch(arr,elem){
    let n = arr.length;
    let start = 0;
    let end = n-1;
    let mid = (start + end) / 2;

    while(arr[mid] !== elem && start <= end){
        if(elem < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start+end)/2);
    }

   return arr[mid] === elem ? mid : -1;
}

let arr = [1,2,3,45,46,58,60];
let t = 86;
 console.log(binarySearch(arr,t));
