// Find the middle element in a linked list

var head;

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function findMiddle() {
  var slow_pointer = head;
  var fast_pointer = head;

  if (head != null) {
    while (fast_pointer != null && fast_pointer.next != null) {
      fast_pointer = fast_pointer.next.next;
      slow_pointer = slow_pointer.next;
    }
    console.log(slow_pointer.data + " is the middle element");
  }
}

function push(data) {
  var new_node = new Node(data);
  new_node.next = head;
  head = new_node;
}

function printList() {
  var tnode = head;
  while (tnode != null) {
    console.log(tnode.data + " -> ");
    tnode = tnode.next;
  }
  console.log("NULL");
}

for (var i = 9; i > 0; i--) {
  push(i);
  printList();
  findMiddle();
}
