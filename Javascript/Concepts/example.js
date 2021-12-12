function outerFunction(arg1){
    var name = 'prajs';
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}

var callFunc = outerFunction();
callFunc();