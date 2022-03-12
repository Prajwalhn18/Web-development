class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var root = null;

function preOrder(node) {
    if (node == null) return;
    console.log(node.val + ' ');
    preOrder(node.left);
    preOrder(node.right);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

preOrder(root);
