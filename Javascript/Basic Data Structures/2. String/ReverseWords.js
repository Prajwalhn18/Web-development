
function reverse(str,begin,end){
    let temp;

    while(begin <= end){
        temp = str[begin];
        str[begin] = str[end];
        str[end] = temp;
        begin++;
        end--;
    }
}

var reverseWords = (s)=>{
s = s.split("");
let start = 0;
for(let end = 0;end < n;end++){
    if(s[end]==''){
        reverse(s,start,end);
        start = end + 1;
        }
    }
    reverse(s,start,n-1);
    return s.join("");
}

var s = "Hello, reverse this sentence.";
var n = s.length;
console.log(reverseWords(s));

