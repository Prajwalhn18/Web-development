//maximum subarray

//kadane's algorithm

function maxSubArraySum(a,n){
    var maxint = Math.pow(2,53);
    var max_so_far = -maxint-1;
    var max_end = 0;

    for(var i = 0; i < n; i++){
        max_end = max_end + a[i];
        
        if(max_so_far < max_end)
            max_so_far = max_end;
            
        if(max_end < 0)
            max_end = 0;
    }
    return max_so_far;
}

var a = [-2,1,-3,4,-1,2,1,-5,4];
var n = a.length;

console.log(maxSubArraySum(a,n));