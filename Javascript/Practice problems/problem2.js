//finding the second largest element in the array

function findSecond(arr,n){
    var i,n;
    if(n < 2){
        console.log('Input not valid');
    }

    var a = arr.sort();
    console.log(a);
    for(i = n-2; i >= 0; i--){
        if(arr[i] != arr[n-1]){
            console.log("Second largest number is "+arr[i]);
            return;
        }
           
    }
    console.log("Second largest number not found");
    
}

let arr = [1,2,6,4,5,8,3,7];
let size = arr.length;
findSecond(arr,size);

