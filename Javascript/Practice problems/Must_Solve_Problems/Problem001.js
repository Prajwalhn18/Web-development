//Is unique: Implement an algorithm to determine if a string has all unique characters

/*
First Approach: Brute force
Second Approach: Sorting based on ASCII values of characters
Third Approach: Without using the extra data structure
*/

// Brute force

function findUniqueOrNot(str) {
//   if (str.length > 128) return false;
   str = str.toLowerCase();
    for (let i = 0; i < str.length; i++)
      for (let j = i + 1; j < str.length; j++)
        if (str[i] == str[j + 1]) return false;
    return true;

}
        
let str = "abcd";
let result = findUniqueOrNot(str);
if(result) console.log("Unique String");
else console.log("Not Unique String");




// //Without using the extra data structure
// /*
// - Maintain a value called checker(32 bits)
// */
// function unique_WithoutExtraDS(str) {
//   var checker = 0;
//   for (let i = 0; i < str.length; i++) {
//     var bitIndex = str.charAt(i) - "a";
//     console.log(bitIndex);
//     if ((checker & (1 << bitIndex)) > 0) {
//       return false;
//     }

//     checker |= (1 << bitIndex);
//   }

//   return true;
// }

// let input = "abcdefghij";
 
// if (unique_WithoutExtraDS(input)) {
//     console.log("String is Unique");
// }
// else {
//     console.log("String is not unique");
// }
