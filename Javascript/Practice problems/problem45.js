//write a program to print all the prime numbers between the two numbers

//Take two input from the user.Here, I am taking fixed set.
//loop from low number to high number
//loop from 2 to user input number
// if number is greater than 1 and not divisible by other numbers, print numbers.

const lowerNumber = 20;
const higherNumber = 100;

for(let i = lowerNumber;i <= higherNumber;i++){
    flag = 0;

    for(let j = 2;j < i;j++){
        if(i % j == 0){
             flag = 1;
             break;
        }
    }

    if(i > 1 && flag == 0){
        console.log(i);
    }
}
