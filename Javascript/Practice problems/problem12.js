//check the two words are anagram or not

/*
- check the length of the two words
- sort the strings in an alphabetical order
- check whether both of them are equal or not.If yes they are anagram else they are not
*/

function checkAnagram(str1,str2){
    let x = str1.length;
    let y = str2.length;

    if(x != y){
        // console.log("Not anagram");
        return false;
    }

    str1.sort();
    str2.sort();

    for(var i = 0;i < x;i++)   
        if(str1[i] != str2[i]){
            // console.log("Not anagram");
            return false;
        }
        else{
            // console.log("The words are anagram");
            return true;
        }
    
}

let str1 = ['r','e','d'];
let str2 = ['d','e','r'];

checkAnagram(str1,str2);

if(checkAnagram(str1,str2)){
    console.log("The entered words are anagram");
}
else{
    console.log("The entered words are not anagram");
}