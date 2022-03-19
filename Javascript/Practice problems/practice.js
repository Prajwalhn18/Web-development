function supportFunction(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) continue;
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) !== -1) continue;
        newArr.push(arr2[i]);
    }

    let symArr = new Set(newArr);
    let newSymArr = Array.from(symArr);
    return newSymArr;
}

function sym() {
    let arrayDest = [...arguments];
    let output = arrayDest[0];
    for (let i = 0; i < arrayDest.length; i++) {
        output = supportFunction(output, arrayDest[i]);
    }

    return output.sort((a, b) => a - b);
}

sym([1, 2, 3], [5, 2, 1, 4]);
