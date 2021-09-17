// implementation of queue in js

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()) return "Underflow";
        return this.items[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printQueue(){
        var str = "";
        for(let i = 0; i< this.items.length;i++){
            str += this.items[i] + " ";
        }
        return str;
    }

}


var queue = new Queue();
var queue1 = new Queue();
console.log(queue.dequeue());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.printQueue());

queue.dequeue();
console.log("After dequeue");
console.log(queue.printQueue());
