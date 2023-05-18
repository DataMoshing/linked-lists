class LinkedList {
    constructor() {
        // Setting head property to null.
        this.head = null
        this.size = 0
    }
    prepend(value) {
        // Set the head to a new node with a given value to the beginning of linked list -- Creating a new instance of Node with the given value = (100), next = this.head.
        this.head = new Node(value, this.head)
        this.size++
    }
    append(value) {
        // Add a new instance of Node with given value.
        let node = new Node(value)
        let current;

        // If there is no head node set it to null (in case of linked list is empty).
        if (!this.head) {
            this.head = null
        } else {
            // Assign head node to current variable - can traverse from head node.
            current = this.head

            // Keeps looping until next property of current is not null - Moves current to the next node until reaches the last node in linked list.
            while (current.next) {
                // Set current to next node in linked list one node at a time.
                current = current.next
            }

            //Once loop finishes point to last node in linked list - Sets next property of the last node to the new node that is appending. Adding new node to end of linked list.
            current.next = node
        }
        this.size++
    }
    nodeSize() {
        // Set temporary variable to head.
        let temp = this.head
        let count = 0
        // Loop through next pointers of each node and increment counter for each node.
        while (temp != null) {
            temp = temp.next
            count += 1
        }
        return count
    }
    // Return the value of head node in list.
    headNode() {
        return this.head.value
    }
    tailNode() {
        // If linked list is empty return null.
        if (!this.head) {
            return null
        }
        // Assigns head node to node.
        let node = this.head

        // Loop through node as long as truthy (not null or undefined).
        while (node) {
            // Check if next property on current node is null or undefined - in other words check if current node is the last node. If true return node for result.
            if (!node.next) {
                return node
            }
            // If false set the node to the next node in list allow loop to continue and checking next node.
            node = node.next
        }
    }
    at(value) {
        let index = 0

        // Set node to head node.
        let node = this.head

        // Loop through node as long as truthy (not null or undefined).
        while (node) {
            // If node value is equal to the given value or match found, return the index.
            if (node.value === value) {
                return index
            }
            // // If false set the node to the next node in list allow loop to continue and checking next node and increase index.
            node = node.next;
            index++
        }
        return -1
    }
    pop() {
        // Set head node to current variable.
        let current = this.head
        let previous;

        // Loop through current as long as there is a following node.
        while (current.next) {
            // Set current value to previous before moving to the next node. To keep a reference to the node before.
            previous = current
            // Update the current variable to the next node in list. Moving on to the next node.
            current = current.next
        }
        // Once loop exits (last node in linked list). Set next property of previous node to null removing from list.
        previous.next = null
        // Return modified head node.
        return this.head

    }
    contains(value) {
        // Set node variable to head node.
        let node = this.head

        // Loop through node as long as truthy (not null or undefined).
        while (node) {
            // If head value is equal to given value return true.
            if (node.value === value) {
                return true
            }
            //If false set the node to the next node in list allow loop to continue and checking next node. 
            node = node.next
        }
        return false
    }
    find(value) {
        // Set current to head node.
        let current = this.head
        let count = 0

        // Loop through node as long as truthy (not null or undefined).
        while (current) {
            // If current value is equal to given value return the current node.
            if (current.value === value) {
                return current
            }
            // Increment count by 1 and set the current variable to the next node.
            count++
            current = current.next
        }
        return -1
    }
    toString() {
        // Set node variable to head node.
        let node = this.head
        let str = " "

        // Loop through node as long as truthy (not null or undefined).
        while (node) {
            // Assign node value to str + ->
            str += node.value + " -> "
            // Set the node to the next node in list allow loop to continue and checking next node.
            node = node.next
        }
        // After loop ends append NULL to end of string - there are no more nodes.
        str += " NULL"
        console.log(str)
    }
}

// Class Node is a building block for linked list class.
class Node {
    // value = Value stored in Node, next represents next node in list and is null by default if no next node.
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const list = new LinkedList()

list.prepend(100)
list.append(200)
list.append(300)

list.toString()

console.log("Number of nodes is " + list.nodeSize());
console.log(list.headNode())
console.log(list.tailNode())
console.log(list.at(300))
console.log(list.pop())
list.toString()
console.log(list.contains(200))
console.log(list.find(200))

/*These comments are for me to walk through and understand how to traverse and modify a linked list. */