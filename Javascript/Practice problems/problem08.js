//Find the largest number in the array

function findLargest(arr){
    let res = [];
    for(var i = 0; i < arr.length;i++)
    {
        let largestNumber = arr[i][0];
        for(var j=0;j<arr[i].length;j++){
            if( arr[i][j] > largestNumber ){
                largestNumber = arr[i][j];
            }
        }
        res[i] = largestNumber
    }
    console.log(res);
    return res;
}


findLargest([[1,2,3],[3,54,67,78],[23,45,65,84]]);
