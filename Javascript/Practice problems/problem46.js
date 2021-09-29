// check whether a number is armstron or not

function checkArmstrongNumber(number) {
  var sum = 0;

  let temp = number;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }

  if(sum == number) return "Armstrong";
  else return "Not Armstrong";
}
var chnumber = 153;
console.log(checkArmstrongNumber(chnumber));
