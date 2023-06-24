class Node {
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class Stack {
    constructor(){
      this.top = null
      this.bottom = null
      this.length = 0
    }
  
    peek(){
      if(this.length == 0){
        return "this stack is empty"
      }
      return this.top.value
    }
  
    push(value){
      let newItem = new Node(value)
      if(this.length == 0){  
        this.top = newItem
        this.bottom = newItem
        this.length++  
        return
      } 
      const holdingNode = this.top
      this.top = newItem
      this.top.next = holdingNode
      this.length++
      return
    }
    pop(){
      if(!this.top){ 
        return null
      }
      this.top = this.top.next
      this.length--
      return
    }
  }
  
  const myStack = new Stack();
  myStack.push("Discord")
  myStack.push("Udemy")
  myStack.push("Globo")
  myStack.push("Google")
  myStack.push("Itau")
  myStack.push("Twitter")
  myStack.pop()
  
  
  console.log(myStack.peek())