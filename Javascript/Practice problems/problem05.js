// Reversing a string

function reverseString(str) {
  var x = str.split("").reverse().join("");
  console.log(x);
}

reverseString("seal");


// reversing a string with decrementing for loop

function reverseStringWithDec(str){
  let newString = "";

  for(let i=str.length-1;i>=0;i--)
    newString += str[i]

    return newString;
}

console.log(reverseStringWithDec("cool"));