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

const ll = new LinkedList()

ll.prepend(100)
ll.append(200)

// console.log(ll)

ll.toString()