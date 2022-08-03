class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.length > 0) {
      return this.top;
    }
  }
  push(value) {
    if (this.length === 0) {
      this.top = new Node(value);
      this.bottom = this.top;
      this.length += 1;
      return;
    }
    let oldTop = this.top;
    let newTop = new Node(value);
    newTop.next = oldTop;
    oldTop.previous = newTop;
    if (this.bottom === null) {
      this.bottom = oldTop;
    }
    this.top = newTop;
    this.length += 1;
  }
  pop() {
    if (this.length > 0) {
      this.bottom.value = null;
      let oldBottom;
      if (this.bottom.previous !== null) {
        let newBottom = this.bottom.previous;
        oldBottom = this.bottom;
        this.bottom = newBottom;
        this.bottom.next = null;
        oldBottom.previous = null;
      }
      this.length -= 1;
      return this;
    }
    console.error("the stack is empty!");
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
console.log("checking if empty");
console.log(myStack.isEmpty());
myStack.push("obiwan");
console.log("peeking!");
console.log(myStack.peek());
myStack.push("there");
myStack.push("hello");
console.log("checking if empty!");
console.log(myStack.isEmpty());
console.log("peeking!");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

//Discord
//Udemy
//google
