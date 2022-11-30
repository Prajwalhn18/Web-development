// Merge two sorted arrays

/*
Approaches:

Brute force:
-> put all the elements of arr1 & arr 2 into arr3 and sort the arr3;

Optimized approach:
(Without using extra space)
-> Copy arr1 into arr3
-> Compare arr2 with arr3 & place 
*/

const mergeArray = (arr1, arr2) => {
    const n1 = arr1.length;
    const n2 = arr2.length;
    let i = 0, j = 0, k = 0;
    let arr3 = [];
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }

    while ( i < n1) {
        arr3[k++] = arr1[i++];
    }

    while ( j < n2) {
        arr3[k++] = arr2[j++];
    }

    return arr3;
}

const arr1 = [1,3,5,7];
const arr2 = [2,4,6,8];

console.log(mergeArray(arr1, arr2));