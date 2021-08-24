//A program to remove duplicates from a sorted array

function removeDuplicates(arr,n){

    //check the number of elements in the array
    if(n == 0 || n == 1){
        return n;
        }
    
    var temp = new Array(n);
    var j = 0;
    for(var i = 0; i < n-1; i++)
        //if the numbers next to each other are not equal than add to the 
        if(arr[i] != arr[i+1])
            temp[j++] = arr[i];
        
        temp[j++] = arr[n-1];

        //now you need to modify the original arr
        for(var i = 0; i < j; i++)
            arr[i] = temp[i];
            return j;
}

var arr = [1,1,2,34,34,45];
var n = arr.length;

n = removeDuplicates(arr,n);//get the new length of the array

for(var i = 0;i<n;i++)
   console.log(arr[i]+"");
