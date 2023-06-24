class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  lookup(value){
    let currentNode = this.root
    let keepLooking = true
    while(keepLooking){
      if(currentNode.value == value){
        return currentNode
      } else {
        if(value < currentNode.value){
          if(!currentNode.left){
            keepLooking = false
          }
          currentNode = currentNode.left
        } else {
          if(!currentNode.right){
            keepLooking = false
          }
          currentNode = currentNode.right
        }   
      }
      if(keepLooking == false){
        return "Item não encontrado"
      }
    }
  }
  
  insert(value){
    const newNode = new Node(value)
    if(this.root == null) {
      this.root = newNode
      return this
    }
    let currentNode = this.root
    let keepLooking = true
    while(keepLooking){
      if(newNode.value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode
          keepLooking = false
        } else {
          currentNode = currentNode.left
        }
      }
      else {
        if(!currentNode.right){
          currentNode.right = newNode
          keepLooking = false
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }    

  delete(value){
    
    let currentNode = this.root
    let keepLooking = true
    let aux = currentNode

    
    while(keepLooking){
      if(currentNode.value == value){

        // Se o nó a ser deletado tiver dois childs
        if(currentNode.left && currentNode.right){
          let toBeDeleted = currentNode
          currentNode = currentNode.right
          while(currentNode.left){
            currentNode = currentNode.left
          }
          // console.log("Nó que vai substituir o que vai ser deletado: ")
          // console.log(currentNode)
          // console.log("Nó que vai se amarrar ao novo substituto: ")
          // console.log(aux)
          // console.log("Nó que VAI SER DELETADO: ")
          // console.log(toBeDeleted)
          currentNode.left = toBeDeleted.left
          if(aux.value < toBeDeleted.value){
            aux.right = currentNode
            return
          } else {
            aux.left = currentNode
            return
          }
        }
        
        // Se o nó a ser deletado possui somente um child
        if(currentNode.left && !currentNode.right){
          aux.left = currentNode.left
          return this
        } else if (currentNode.right && !currentNode.left){
          aux.right = currentNode.right
          return this
        }
        
        // Se o nó a ser deletado é um Leaf Node (não tem childs)
        if(currentNode.value > aux.value){
          aux.right = null
        } else {
          aux.left = null
        }


      }

      // Lógica de lookup
      if(value > currentNode.value){
        if(!currentNode.right){
          return "Não encontrado"
        }
        aux = currentNode
        currentNode = currentNode.right
      } else {
        if(!currentNode.left){
          return "Não encontrado"
        }
        aux = currentNode
        currentNode = currentNode.left
      }
    }
  }

}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(4)
tree.insert(6)
tree.insert(2)
tree.insert(23)
tree.insert(18)
tree.insert(24)
tree.insert(25)
tree.insert(28)
tree.insert(26)
tree.insert(31)
tree.insert(30)
tree.insert(29)



// console.log(JSON.stringify(traverse(tree.root)))
tree.delete(28)
console.log(JSON.stringify(traverse(tree.root)))


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}