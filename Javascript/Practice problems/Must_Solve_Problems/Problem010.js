// Rotate the given matrix by 90 degree.

/*
Solution:
1. Take the transpose of the matrix
2. Reverse each row

*/

const rotateMatrix = (arr) => {
    // as n x n matrix is given
    let numberOfRows = arr.length;
    let numberOfColumns = numberOfRows;

    // Transpose of the matrix
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = i; j < numberOfColumns; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // swap the first & last element
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < parseInt(numberOfColumns/2); j++) {
            let temp =  arr[i][j];
            arr[i][j] = arr[i][arr[0].length - j - 1];
            arr[i][arr[0].length - j - 1] = temp;
        }
    }

    return arr;

}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateMatrix(arr));