// //check the two words are anagram or not

// /*
// - check the length of the two words
// - sort the strings in an alphabetical order
// - check whether both of them are equal or not.If yes they are anagram else they are not
// */

// function checkAnagram(str1,str2){
//     let x = str1.length;
//     let y = str2.length;

//     if(x != y){
//         // console.log("Not anagram");
//         return false;
//     }

//     str1.sort();
//     str2.sort();

//     for(var i = 0;i < x;i++)
//         if(str1[i] != str2[i]){
//             // console.log("Not anagram");
//             return false;
//         }
//         else{
//             // console.log("The words are anagram");
//             return true;
//         }

// }

// let str1 = ['r','e','d'];
// let str2 = ['d','e','r'];

// checkAnagram(str1,str2);

// if(checkAnagram(str1,str2)){
//     console.log("The entered words are anagram");
// }
// else{
//     console.log("The entered words are not anagram");
// }

//solved using frequency counter

function anagramOrNot(s, t) {
    if (s.length !== t.length) return 'Not anagram';

    let fcounter1 = {};
    let fcounter2 = {};

    for (let val of s) {
        fcounter1[val] = (fcounter1[val] || 0) + 1;
    }
    console.log(fcounter1);

    for (let val of t) {
        fcounter2[val] = (fcounter2[val] || 0) + 1;
    }
    console.log(fcounter2);

    for (let key in fcounter1) {
        if (fcounter1[key] !== fcounter2[key]) return 'Not Anagram';
        else {
            return 'Anagram';
        }
    }
}

let str1 = 'eat';
let str2 = 'tea';

console.log(anagramOrNot(str1, str2));
