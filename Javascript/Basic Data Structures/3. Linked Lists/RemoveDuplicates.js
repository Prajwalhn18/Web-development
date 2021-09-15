// program to remove duplicates from a linked list
var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function removeDuplicates(){
    var p1 = null, p2 = null, duplicate = null;
    p1 = head;

    while(p1 != null && p1.next != null){
        p2 = p1;

        while(p2 != null && p2.next != null){
            if(p1.data = p2.next.data){
                duplicate = p2.next;
                p2.next = p2.next.next; 
            }
            else{
                p2 = p2.next;
            }
        }
        p1 = p1.next;
    }
}


function printLL(node){
    while(node != null){
        console.log(node.data);
        node = node.next;
    }
}


head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(11);
head.next.next.next = new Node(11);
head.next.next.next.next = new Node(12);
head.next.next.next.next.next = new Node(11);
head.next.next.next.next.next.next = new Node(10);

console.log("Linked list before removing duplicates:");
printLL(head);
removeDuplicates();
console.log("Linked list after removing duplicates: ");
printLL(head);