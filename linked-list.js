class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    prepend(value) {
        this.head = new Node(value, this.head)
        this.size++
    }
    append(value) {
        let node = new Node(value)
        let current;

        if (!this.head) {
            this.head = this.head
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }
        this.size++
    }
    nodeSize() {
        let temp = this.head
        let count = 0
        while (temp != null) {
            temp = temp.next
            count += 1
        }
        return count
    }
    headNode() {
        return this.head.value
    }
    tailNode() {
        if (!this.head) {
            return null
        }
        let node = this.head

        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }
    at(value) {
        let index = 0

        let node = this.head

        while (node) {
            if (node.value === value) {
                return index
            }
            node = node.next;
            index++
        }
        return -1
    }
    pop() {
        let current = this.head
        let previous;

        while (current.next) {
            previous = current
            current = current.next
        }
        previous.next = null
        return this.head

    }
    containst() {

    }
    toString() {
        let node = this.head
        let str = " "

        while (node) {
            str += node.value + " -> "
            node = node.next
        }
        str += " NULL"
        console.log(str)
    }
}


class Node {
    constructor(value, next = null) {
        this.value = value
        this.nextNode = next
    }
}

const list = new LinkedList()

list.prepend(100)
list.append(200)
list.append(300)

list.toString()
list.nodeSize()
console.log("Count of nodes is " + list.nodeSize());
console.log(list.headNode())
console.log(list.tailNode())
console.log(list.at(300))
console.log(list.pop())
list.toString()
