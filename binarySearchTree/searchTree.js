class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;

            while (currentNode != null) {
                if (node.value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        currentNode = null;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        currentNode = null;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }

        return this;
    }
}

const searchTree = new BinarySearchTree();

searchTree.insert(50);
searchTree.insert(45);
searchTree.insert(30);
searchTree.insert(46);
searchTree.insert(65);
searchTree.insert(70);
