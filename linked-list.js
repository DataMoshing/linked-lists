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
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

const list = new LinkedList()

list.prepend(100)
list.append(200)
list.append(300)

// console.log(ll)

list.toString()
list.nodeSize()

console.log("Count of nodes is " + list.nodeSize());
console.log(list.headNode())
console.log(list.tailNode())
