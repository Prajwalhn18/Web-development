// Given two strings, write a method to decide if one is permutation of the other

/*
first approach:
- Sort the string and compare them
*/

function checkPer(str1,str2){
    if(str1.length != str2.length) return false;
    
    let ch1 = str1.split('');
    let ch2 = str2.split('');
    ch1.sort();
    ch2.sort();

for(let i=0;i< ch1.length;i++)
    if(ch1[i] != ch2[i]) 
        return false;

return true;
}

let str1 = "abc";
let str2 = "cba";

if(checkPer(str1,str2)) console.log("strings are permutations of each other");
else console.log("strings are not permutations of each other");