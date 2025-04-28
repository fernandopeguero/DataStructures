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

    buildTree(array) {
        if (array.length === 1) {
            this.insert(array[0]);
            return;
        } else {
            // insert node then find mid point then insert node again
            const mid = Math.floor(array.length / 2);
            this.insert(array[mid]);

            this.buildTree(array.slice(0, mid));
            this.buildTree(array.slice(mid + 1, array.length));

            return this;
        }
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

searchTree.buildTree([1, 2, 3, 4, 5, 7, 8]);
