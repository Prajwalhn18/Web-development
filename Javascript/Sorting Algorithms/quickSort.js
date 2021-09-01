//Quick Sort
function quickSort(oArr){
    
    if(oArr.length <= 1){
        return oArr;
    }
    else{
        var left = [];
        var right = [];
        var newArr = [];
        var pivot = oArr.pop();
        var len = oArr.length;

        for(let i = 0;i < len; i++){
            if(oArr[i] <= pivot){
                left.push(oArr[i]);
            }
            else{
                right.push(oArr[i]);
            }
        }

        return newArr.concat(quickSort(left),pivot,quickSort(right));
    }
}

let arr = [4,0,-1,2,5,8,3,1];
console.log(quickSort(arr));