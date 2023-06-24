class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.length = 0
  }

  peak(){
    return this.first.value
  }

  enqueue(value){
    const newItem = new Node(value)
    if(this.length == 0){
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    this.length++
    return this
  }

  dequeue(){
    if(!this.first){
      return null
    } 
    if(this.first == this.last){
      this.last = null
      return this
    }
    this.first = this.first.next
    this.length--
    return this
  }
}

const myQueue = new Queue()

myQueue.enqueue("Andre")
myQueue.enqueue("Marcos")
myQueue.enqueue("João")
myQueue.enqueue("Fernando")
console.log(myQueue.peak())
myQueue.dequeue()
console.log(myQueue.peak())
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)