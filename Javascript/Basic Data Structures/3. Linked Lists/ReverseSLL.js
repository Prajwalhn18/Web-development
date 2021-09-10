// Reverse a singly linked list 

function SllNode(val){
    this.val =val;
    this.next = null;
}

function sll(){
    this.head = null;
    this.size = 0; 
}

sll.prototype.isEmpty = function(){
    console.log("The SLL is empty");
    return this.size == 0;
}

sll.prototype.insert = function(value){
    if(this.head == null){
        this.head = new SllNode(value);
    }
    else{
        var temp = this.head;
        this.head = new SllNode(value);
        this.head.next = temp;
    }
    this.size++;
}

function reverseSll(sll){
    var node = sll.head;
    var prev = null;
    while(node){
        var temp = node.next;
        node.next = prev;
        prev = node;
        if(!temp) break;
        node = temp;
    }
    return node;
}

var sl1 = new sll();
sl1.insert(1);
sl1.insert(2);
sl1.insert(3);
console.log(sl1);
console.log(reverseSll(sl1));