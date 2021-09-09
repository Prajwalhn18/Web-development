class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var root = null;

function postOrder(node){
    if(node == null) return;

    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val+" ");
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

postOrder(root);
