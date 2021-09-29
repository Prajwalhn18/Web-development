// print fibonacci numbers

function fib(num){
    var t1 = 0;
    var t2 = 1;

    for(let i = 1;i<=num;i++){
        console.log(t1);

        let nextTerm = t1+t2;
        t1 = t2;
        t2 = nextTerm;
    }
}

fib(10);