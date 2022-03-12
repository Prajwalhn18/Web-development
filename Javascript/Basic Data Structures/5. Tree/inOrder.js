class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function inOrder(node) {
    if (node == null) return;

    inOrder(node.left);
    console.log(node.val + ' ');
    inOrder(node.right);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

inOrder(root);
