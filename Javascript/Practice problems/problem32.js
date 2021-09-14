function reverseString(arr){
    let n = arr.length;
    var newArr = [];

    for(let i = n-1;i >= 0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr = ['h','e','l','l','o'];
console.log(reverseString(arr));

console.log("--Two Pointer Method--");

//two pointer method

var reverseStringTwo = function(s) {
    let l = 0;
       let r = s.length-1;
       
       while(l <= r){
           [s[l],s[r]] = [s[r],s[l]];
           l++;
           r--;
       }
       return s;
   };
var arrTwo = ['s','t','r','i','n','g'];
console.log(reverseStringTwo(arrTwo));