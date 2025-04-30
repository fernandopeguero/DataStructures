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

    /* Write a function call find that return the given value */
    find(value) {
        /*
            traverse the tree and return the node that matches the value 
        */

        /*
            get the current node 
            check that is the node is the current node  equal the value 
            check if value if greater or less or greater than the value 
            if next node is null break
            set current to new node 
        */

        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            }

            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return null;
    }

    deleteItem(value) {
        /*
            traverse the tree and delete the value
        */

        /*
            check if root is equal to the value and se it to null        
            else create a previous and currentNode variable 
            and update the previous and currentNode each time 
        */
        debugger;
        if (value === this.root.value) {
            this.root = null;
        } else {
            let previous = this.root;
            let current =
                value > previous.value ? previous.right : previous.left;

            while (current) {
                if (current.value === value) {
                    if (value > previous.value) {
                        previous.right = null;
                    } else {
                        previous.left = null;
                    }
                    break;
                } else {
                    previous = current;

                    current =
                        value > previous.value ? previous.right : previous.left;
                }
            }
        }

        return this;
    }

    levelOrder(callback) {
        // traverse the tree breath first
        const queue = [this.root];

        while (queue.length) {
            const currentNode = queue[0];

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            // call the callback on the current Node
            callback(queue.shift());
        }

        return "Traversal Completed";
    }
}

const searchTree = new BinarySearchTree();

searchTree.buildTree([1, 2, 3, 4, 5, 7, 8]);
