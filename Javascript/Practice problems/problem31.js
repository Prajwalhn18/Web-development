//Move zeros

var moveZeroes = function(nums) {
    let n = nums.length;
    
    for(let i = 0;i<n-1;i++){
        if(nums[i] == 0){
            nums.splice(i--,1);
            nums.push(0);
            n--;
        }
        
    }
    return nums;
};


var arr = [1,0,1];
console.log(moveZeroes(arr));