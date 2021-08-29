//validate parenthesis

function validateParenthesis(s){
    let checkStack = [];

    for(var i = 0; i < s.length; i++){
        let char = checkStack[checkStack.length - 1];

        //if you encounter opening brackets then push it into stack

        if(s[i] == "(" || s[i] == "{" || s[i] == "[") {
            checkStack.push(s[i]);
        }
        else if((char == "(" && s[i] == ")") ||
        (char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")){
            checkStack.pop();
        }else return false;
    }
    return checkStack.length ? false:true;
}

var check = validateParenthesis("[]");
if(check){
    console.log("Valid");
}
else{
    console.log("Invalid");
}