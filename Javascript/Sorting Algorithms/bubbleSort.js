//Bubble sort
/*

- compare two elements (neighbouring elements)[i and i+1]
- if arr[j] > arr[j+1], then swap elements.
- else continue the same till you get the all sorted elements.

*/

function swapElements(arr,x,y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr,n){
    var i,j;
    for(i = 0;i< n-1;i++){
        for(j = 0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                swapElements(arr,j,j+1);
            }
        }
    }
}

function printArray(arr,size){
    for(i=0;i<size;i++){
        console.log(arr[i]+" ");
    }
}

var arr = [12,3,4,1,56,40,30];
var n = arr.length;
bubbleSort(arr,n);
printArray(arr,n);