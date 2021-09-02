//singly linked list

function sllNode(data){
    this.data = data;
    this.next = null;
}

function sll(){
    this.head = null;
    this.size = 0;
}

sll.prototype.isEmpty = function(){
    return this.size = 0;
}

sll.prototype.insert = function(value){
    if(this.head === null){
        this.head = new sllNode(value)
    }
    else{
        var temp = this.head;
        this.head = new sllNode(value);
        this.head.next = temp;
    }
    this.size++;
}



//deletion by value

sll.prototype.remove = function(value){
    var currentHead = this.head;

  if(currentHead.data == value){
        this.head = currentHead.next;
        this.size--;
    }
else{
    var prev = currentHead;
    while(currentHead.next){
        if(currentHead.data == value){
            prev.next = currentHead.next;
            prev = currentHead;
            currentHead = currentHead.next;
            break;
        }
        prev = currentHead;
        currentHead = currentHead.next;
    }

    if(currentHead.data == value){
        prev.next = null;
    }
    this.size--;
}

}


var sl1 = new sll()
sl1.insert(10);
sl1.insert(20);
sl1.remove(10);
sl1.insert(12);
sl1.remove(12);

console.log(sl1);
