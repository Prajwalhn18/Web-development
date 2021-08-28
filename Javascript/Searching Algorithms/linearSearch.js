function linearSearch(arr,key){
    for(var i = 0; i < arr.length;i++){
        if(arr[i] == key){
            console.log("found at "+i);
        }
    }
    return -1;
}

var arr = [1,5,4,3,6,8];
var key = 3;
linearSearch(arr,key);