//palindrome checker

function palindrome(str){
    // let str1 = [];
    // let str2 = [];
    var strSplit = str.split("");
    var n = strSplit.length;
    console.log(strSplit);
    for(let i = 0,j=n-1; i < n,j >=0 ;i++,j--){
        if(strSplit[i] == strSplit[j]){
            return true;
        }
        else {
            return false;
        }
    }
}

if(palindrome("apa")){
    console.log("The word is a palindrome");
}
else{
    console.log(" The word is NOT a palindrome");
}