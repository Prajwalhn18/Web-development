const setZeros = (arr) => {
    let rows = new Set();
    let columns = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j]) {
                rows.add(i);
                columns.add(j);
            }
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++){
            if (rows.has(i) || columns.has(j)) {
                arr[i][j] = 0;
            }
        }
    }
    return arr;

}

const arr = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeros(arr));