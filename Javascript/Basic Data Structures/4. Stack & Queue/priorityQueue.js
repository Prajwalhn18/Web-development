class QueueElement{
    constructor(element,priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,priority){
        var qElement = new QueueElement(element,priority);
        var contain = false;

        for(var i = 0;i< this.items.length;i++){
            if(this.items[i].priority > qElement.priority){
                this.items.splice(i,0,qElement);
                contain = true;
                break;
            }
        }

        if(!contain) this.items.push(qElement);
    }

    dequeue(){
        if(this.isEmpty()) return " Underflow";
        return this.items.shift();
    }

    rear(){
        if(this.isEmpty()) return "Underflow";
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printQueue(){
        var str = "";
        for(let i = 0; i< this.items.length;i++){
            str += this.items[i].element + " ";
        }
        return str;
    }
}


var pq1 = new PriorityQueue();

console.log(pq1.dequeue());
pq1.enqueue("b",2);
pq1.enqueue("d",4);
pq1.enqueue("a",1);
pq1.enqueue("c",3);
console.log(pq1.printQueue());
console.log(pq1.rear().element);
