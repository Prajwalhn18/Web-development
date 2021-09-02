// Find a contiguous subarray which adds to a given number.

/*
- The function must return the starting and ending position.
- Use 1 based indexing
*/

function subArraySum(arr, arrLength, target){
        var sum = 0;
        if(arrLength == 0){
            console.log("Enter the proper value");
        }

        else{
            for(let i = 0; i < arrLength; i++){
                sum = arr[i];
                for( let j = i+1; j <= arrLength;j++){
                    if(sum == target){
                        console.log("The Sum is found between: "+(i+1)+" and "+j);
                        return;
                    }
                    if(sum > target || j == n){
                        break;
                    }
                    sum = sum+arr[j];
                }
            }
        }

        console.log("No subarray found");
        return;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
var n = arr.length;
var t = 18;
subArraySum(arr,n,t);