function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(node);
        }
    }

    insertNode(node) {
        let current = this.root;

        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else if (node.data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }

                current = current.right;
            } else break;
        }
    }
}

(function test() {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(1);
    tree.add(4);
    tree.add(7);
    tree.add(6);
    tree.add(9);
    console.log(tree);
})();
