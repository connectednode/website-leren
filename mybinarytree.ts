// binary tree

// node class
class node{
  value: string | number          //TODO
  right: any               //TODO
  left: any                //TODO
  index: number            //TODO
   constructor(value, index){

      if(isNaN(value)){
        console.log(value)
      }

       this.value = value  
       this.left = null
       this.right = null
       this.index = index
   }

   calculate(){
     let test = this.value as any
      return this.value
    }
  //   else if (this.isOpertor == true){
  //   if(this.value == "*"){
  //     this.left.calculate * this.right.calculate
  //   }
  //   else if(this.value == "/"){

  //   }
  //   else if(this.value == "+"){

  //   }
  //   else if(this.value == "-"){

  //   }
  // }

  //  }

}



// tree class
class BT{
   root: node
   count: number
   constructor(value) {
       this.root = new node(value, 1)
       this.count = 1
   }

  insert(value, index, nodeLeft){
    this.count++ //TODO: increses the conte of the number of nodes
    let newNode = new node(value, index)
    
    let nodeIndex = "???" //TODO

    if(nodeLeft == true){
      
    }

    else if(nodeLeft == false){

    }
    else
    console.log("something went wrong")

  }

  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while(queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result
  }



   changeRoot(value, index){
    let currentRoot
    // currentRoot = bt.bts()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(value)
    currentRoot.forEach(test)
   };
}

function test(value, index, nodeLeft){
  bt.insert(value, index, nodeLeft)
}
  
let bt = new BT(0)
bt.insert ("+", 2, true)
bt.insert (1, 3, true)
bt.insert (2, 4, true)
bt.insert (4, 5, true)
console.log(bt)
