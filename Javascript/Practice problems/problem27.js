// search insert position
//Problem based on binary search

function findTarget(arr,target){
        var n =arr.length;
        var lower = 0;
        var upper = n-1;
        
        while(lower <= upper){
            var mid = lower + Math.floor((upper-lower)/2);
            if(arr[mid] == target){
                return mid;
            }
            if(target < arr[mid]){
                upper = mid-1; 
            }
            else if(target > arr[mid]){
                lower = mid + 1;
            }
        }
        return lower;
}

let arr = [1,3,4,5,6,7];
var t = 8;
console.log(findTarget(arr,t))
