// Working of forEach()
/*
- It is mainly used for the serial execution of functionality against a list of elements.
- Array.forEach(callback(item, index, arr), thisValue): while calling a function.
*/

//printing all the elements in the array

const arr = [1,2,3,4,5];
arr.forEach(item => console.log(item));

// iterate through a list for capitalizing the words

const words =["hello","world","this","is","javascript"];
const capitalWords = words.forEach(capitalize);

function capitalize(word,index,arr){
    arr[index] = word[0].toUpperCase() + word.substring(1);

}
console.log(words);

// working of map
console.log("--working of map--");

const numberSquare = arr.map(square);

function square(number){
    return number * number;
}

console.log(numberSquare);

//filter method 

const evenNumbers = arr.filter(isEven);

function isEven(number){
    return number % 2 === 0;
}
console.log(evenNumbers);

