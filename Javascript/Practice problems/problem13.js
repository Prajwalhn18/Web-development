//find the longest common prefix
/*
Let us solve this problem using word by word matching

*/


function findCommonPrefix(str1,str2){
    let res = "";
    let x = str1.length;
    let y = str2.length;

    for(let i=0,j=0;i<= x - 1 && j<= y-1;i++,j++){
        if(str1[i] != str2[j]){ 
            break;
        }
        res += str1[i];
    }
    return (res);
}

function mainCommonPrefix(arr,n){
let prefix = arr[0];

for(let i=1;i<= n-1;i++){
    prefix = findCommonPrefix(prefix,arr[i]);
}
return (prefix);
}

let arr = ["apple","ape","apco","appy"];
let n = arr.length;
let ans = mainCommonPrefix(arr,n);
if(ans.length > 0)
    console.log("The longest prefix is: ",ans);
else{
    console.log("There is no longest prefix");
}