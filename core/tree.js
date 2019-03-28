class TreeNode {

    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    addLeft(node) {
        this.left = node;
    }

    addRight(node) {
        this.right = node;
    }

    removeLeaf(data) {

    }    
}

let root = new TreeNode(null, null);

let node1 = new TreeNode(1, null);
let node2 = new TreeNode(2, null);
let node3 = new TreeNode(3, null);
let node4 = new TreeNode(4, null);
let node5 = new TreeNode(5, null);
let node6 = new TreeNode(6, null);

root.addLeft(node1);
root.addRight(node2);

node1.addLeft(node3);
node1.addRight(node5);
node2.addRight(node4);
node2.addLeft(node6);


console.log(root);




