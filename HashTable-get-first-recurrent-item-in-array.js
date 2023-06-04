// this example shows how to, given an array, return the first recurring element (if it happens). Otherwise this must return undefined

// Solution 1: this is the most complete solution, since it implements the HashTable logic from scratch
class HashTable{
  constructor(size){
    this.data = new Array(size)
    this.setItem = function(key, value){
      let address = this._hash(key)
      this.data[address] = [key, value]
    }
    this.getItem = function(key){
      return this.data[this._hash(key)]
    }
  }
  _hash(key) {
    let hash = 0;
    hash = (hash + toString(key).charCodeAt(toString(key)) * key) % this.data.length
    return hash;
  }
}

let myHashTable = new HashTable(50);

function getFirstRecurrentItem(testData){
  for(const item of testData){
    if(myHashTable.getItem(item)){
      return(item)
    } else {
      myHashTable.setItem(item, true)
    }
  }  
}

// console.log(getFirstRecurrentItem([2,3,4,5,4,6]))


// Solution 2: this solutions uses the Javascript built-in Map method (the uses hashtables in its implementation)

function getFirstRecurrentItem(testData){
  let map = {}
  for(item of testData){
    if(map[item]){
      return map[item]
    } else {
      map[item] = item
    }
  }
  return undefined
}

console.log(getFirstRecurrentItem([2,3,4,5,1,2,4,6]))
