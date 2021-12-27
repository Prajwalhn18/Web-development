// Implementing a linked list using Javascript

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //implement all the functions of linked list

    push(val) {
        var node = new Node(val);
        var current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }

    // inserting an element at the given index

    insertAt(val, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter valid index");
        else {
            var node = new Node(val);
            var curr, prev;
            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
            }
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    //removing elements

    removeElement(val) {
        var current = this.head;
        var prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
    }

    //print list
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + "-->";
            curr = curr.next;
        }
        console.log(str);
    }
}

var ll = new linkedList();

ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.push(60);
ll.push(70);

console.log(ll);
ll.printList();
