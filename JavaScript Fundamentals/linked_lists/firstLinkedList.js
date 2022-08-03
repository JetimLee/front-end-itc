//linked lists have a loose structure that allow you to insert different values by adjusting a few pointers.
//arrays - elements are indexed, linked lists you start at the head and traverse until you get there
//linked lists are o(n), arrays are also o(n)
//arrays are faster to look up than linked lists
//linked lists - gotta wait till you hit null, then you've hit the end of the list
//linked lists - can delete nodes really easily and insert nodes really easily

//closest thing to a pointer in javascript is this
// let obj1 = {
//   a: true,
// };
// let obj2 = obj1;
// obj2.a = false;
// //this won't run because there is still a pointer to the value assigned to obj1
// delete obj1;
// //can still see the obj here
// console.log(obj1);
// console.log(obj2);
// //a pointer is simply a reference to something else in memory

// //first linkedList in JavaScript
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    //need to update the previous before a new item gets added
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newValue = new Node(value);
    newValue.next = this.head;
    //the new value here's previous is null since it'll become the new head
    this.head = newValue.previous;
    //head is reassigned to the new value
    this.head = newValue;
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    //have to start from the head in a singly linked list. in a doubly linked list you could in theory start from the tail
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }
  insert(index, value) {
    if (index >= this.length) {
      console.log("yes longer");
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;
    this.length++;
    return this.printList();
  }
  delete(index) {
    if (index >= this.length) {
      console.error(
        "The index provided is greater than the length of the list"
      );
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    //grab the value by seeing where the leader is and what its next value is pointing towards
    const nodeToDelete = leader.next;
    //reassigning the pointer of next property in the value to delete to the leader's next property
    leader.next = nodeToDelete.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    //check if valid index?
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
const myLinkedList = new LinkedList(10);
const myNewNode = myLinkedList.append(5);
const anotherNode = myLinkedList.append(16);
myLinkedList.prepend(22);
myLinkedList.insert(1, 1000);
console.log(myLinkedList);
