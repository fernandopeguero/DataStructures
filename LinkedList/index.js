class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    insertAt(value, index) {
        const node = new Node(value);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else if (index === this.size - 1) {
            this.tail.next = node;
            this.tail = node;
        } else {
            const previous = this.at(index);
            if (!previous) return false;

            node.next = previous.next;
            previous.next = node;
        }

        this.size++;
        return true;
    }

    removeAt(index) {
        let removedNode = null;

        if (index === 0) {
            if (this.size === 0) return;

            const temp = this.head.next;
            removedNode = temp;
            this.head.next = null;
            this.head = temp;
        } else {
            const temp = this.at(index);
            removedNode = temp.next;
            temp.next = null;
            this.tail = temp;
        }

        this.size--;

        return removedNode;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    at(position) {
        let count = 0;
        const index = position - 1;

        let node = this.head;
        while (count != index) {
            count++;
            node = node.next;
        }

        return node;
    }

    pop(index) {
        if (this.size === 0) return;

        let removedNode = null;
        if (this.size === 1) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            const node = this.at(index - 1);
            removedNode = node.next;
            this.tail = node;
            this.tail.next = null;
        }

        this.size--;

        return removedNode;
    }

    find(value) {
        let node = this.head;

        let count = 0;

        while (node != null) {
            if (node.value === value) return count;
            node = node.next;
            count++;
        }

        return null;
    }

    contains(value) {
        let node = this.head;

        while (node != null) {
            if (node.value === value) return true;
            node = node.next;
        }

        return false;
    }

    toString() {
        let result = "";

        let node = this.head;

        while (node != null) {
            result += `( ${node.value} ) -> `;
            node = node.next;
        }

        result += "null";

        console.log(result);
    }
}

const linkedList = new LinkedList();

linkedList.append("Pasamanos");
linkedList.append("Regulador");
linkedList.append("Trofeos");
linkedList.append("Trinketes");
linkedList.append("Poison");
linkedList.append("alante");
linkedList.append("venados");
linkedList.append("spias");

console.log(linkedList.head);
