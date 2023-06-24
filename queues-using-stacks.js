class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class MyQueue {
  constructor(){
    this.top = null
    this.bottom = null
    this.length = 0
  }

  push(value){
    const newNode = new Node(value)
    // newNode.next = this.top
    if(this.length == 0){
      this.top = newNode
      this.bottom = newNode
    }
    else {
      this.top.next = newNode
      this.top = newNode
    }
    this.length++
    return this
  }

  // pop(){
  //   this.top = this.top.next
  //   this.length--
  //   return this
  // }

  pop(){
    const handlingPointer = this.bottom
    this.bottom = this.bottom.next
    return handlingPointer
  }

  peek(){
    return this.bottom
  }

  empty(){
    return this.length==0
  }
}

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
myQueue.pop(); // return 1, queue is [2]
console.log(myQueue.empty()) // return false
console.log(myQueue.peek())
