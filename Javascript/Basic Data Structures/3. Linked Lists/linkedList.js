class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
    }

}



const n1 = new linkedList();
n1.insertFirst(100);
n1.insertFirst(200);
console.log(n1);