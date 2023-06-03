class HashTable {
    constructor(size){
      this.data = new Array(size);
  
      this.set = function(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
          this.data[address] = []
        } 
        this.data[address].push([key,value])
      }
  
      this.get = function(key){
        let address = this._hash(key)
        for(let i = 0; i < this.data[address].length; i++){
          if(this.data[address][i][0] == key){
            return this.data[address][i][1]
          }
        }
          
      }
  
      
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    keys(){
      let keys = []
      for(let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keys.push(this.data[i][0][0])
        }
      }
      return keys
    }
  }
  
  
  
  
  const myHashTable = new HashTable(50);
  // console.log(myHashTable._hash("grapes"))
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples', 54);
  myHashTable.set('oranges', 2);
  let consulta = myHashTable.get('oranges')
  console.log(consulta)
  
  keys = myHashTable.keys()
  console.log(keys)  