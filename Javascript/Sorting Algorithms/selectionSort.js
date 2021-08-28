// Selection sort
/*
- swap function
- function for selection sort(arr,n). 
- apply two for loops i & j.consider min to be i. Compare the elements in the j loop;
on the basis of the element decide wheter to swap or not.
- i+1 is because swap the elements of the subarry that is being compared.
*/

function swap(arr,x,y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

//function for selection sort
function selectionSort(arr,n){
    for(var i = 0;i<n;i++){
        let min = i;
        for(var j = i+1;j<n;j++)
            if(arr[j] < arr[min]) min = j;
                swap(arr,min,i);
    }  
}

function printArray(arr){
    for(i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
    return;
}


var arr = [12,1,4,87,8,9,13];
var n = arr.length;
selectionSort(arr,n);
printArray(arr,n);