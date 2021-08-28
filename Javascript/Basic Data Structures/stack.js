// Stack implementation

class Stack{
    constructor(){
        this.items = [];
    }

    //push function
    push(element){
        this.items.push(element);
    }

    //pop function
    pop(){
        if(this.items.length == 0){
            return "Underflow";
        }
        else{
            return this.items.pop();
        }
    }

    //print stack
    printStack(){
        var str = " ";
        for(var i =0;i<this.items.length;i++){
            str += this.items[i]+ " ";
        }
        return str;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());
console.log("The popped item is "+ stack.pop());
console.log(stack.printStack());
