class Node {
  constructor(item){
    this.value = item
    this.next = null
  }
}

class LinkedList {
  constructor(item){
    this.head = {
      value: item,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  
  prepend = function(item){
    let new_item = new Node(item)
    new_item.next = this.head
    this.head = new_item
    this.length++
  }

  insert = function(index, item){
    if(index == 0){
      return this.prepend(item)
    }
    if(index >= this.length){
      return this.append(item)
    }
    let new_item = new Node(item)
    let currentItem = this.traverseToIndex(index)
    new_item.next = currentItem.next
    currentItem.next = new_item
  }
  
  append = function(item){
    let new_item = new Node(item)
    this.tail.next = new_item  
    this.tail = new_item
    this.length++
  }

  remove = function(index){
    if(index == 0){
      this.head = this.head.next
      this.length--
      return
    }
    if(index > this.length){
      return
    }
    let currentItem = this.traverseToIndex(index)
    currentItem.next = currentItem.next.next
    this.length--
  }

  printList = function(){
    let items = [this.head.value]
    let currentItem = this.head
    while(currentItem.next){
      items.push(currentItem.next.value)
      currentItem = currentItem.next
    }
    // return console.log(items)
  }

  printListNew = function(){
    let currentItem = this.tail
    while(currentItem.next){
      console.log(currentItem)
      currentItem = currentItem.next 
    }
  }

  reverse = function(){
    let counter = 1
    let currentItem = this.head 
    while(counter <= this.length){
      // console.log(currentItem)
      let temp = currentItem
      if(currentItem.next){
        currentItem.next.test = temp
      }
      let referenceToFix = currentItem
      currentItem = currentItem.next
      referenceToFix.next = referenceToFix.test
      referenceToFix.test = null
      counter++
    }
  }

  // This method is used as a support for the insert and delete operations
  traverseToIndex = function(index){
    let currentItem = this.head
    let counter = 0
    while(counter !== index-1){
      currentItem = currentItem.next
      counter++
    }
    return currentItem
  }  
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(11)
myLinkedList.append(18)
myLinkedList.append(23)
myLinkedList.append(4)
myLinkedList.append(29)
myLinkedList.reverse()

console.log(myLinkedList.printListNew())