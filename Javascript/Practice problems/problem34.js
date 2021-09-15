// check palindrome of a string 

function palindromeOrNot(str){
    var n =  str.length;
    let s  = str.toLowerCase();


    for(let i  =0; i < n/2;i++){
        if(s[i] !== s[n-1-i]) return "Not a palindrome";
    }
    return "It is a palindrome";
}

var str  = "wow";
console.log(palindromeOrNot(str));