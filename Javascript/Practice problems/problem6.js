// Factorize the given number.
// the factorial function is defined for only non-negative numbers.

function factorize(number){
    if(number < 0){
        return -1;
    }

    else if(number == 0){
        return 1;
    }
    else{
        return number * factorize(number - 1);
    }
}

var f = factorize(-5);
console.log(f);
