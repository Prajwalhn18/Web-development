// Check whether the given number is palindrome or not

/*
1) Reverse the digit.
2) check the reversed digit with the given digit
3) If both match it is palindrome else it is not a palindrome
*/

function reverseNum(num){
let temp = 0;
while(num > 0){
    temp = temp*10 + num % 10;
    num = Math.floor(num/10);
}
return temp;
}


function checkPal(n){
  let reverseNumber = reverseNum(n);
  if(reverseNumber == n){
      console.log("The number is palindrome");
  }
  else{
      console.log("The number is NOT a palindrome")
  }
}

checkPal(121);