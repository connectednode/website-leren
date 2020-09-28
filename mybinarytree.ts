// binary tree

// node class
class node{
  value: any         //TODO
  right: any         //TODO
  left: any          //TODO
   constructor(value){
       this.value = value 
       this.left = null
       this.right = null
   }
}



// tree class
class BT{
   root: node
   count: number
   constructor(value) {
       this.root = new node(value)
       this.count = 1
   }

   insert(value: any){
       this.count++

       let newNode = new node(value)
       
       const searchTree = node => {
           // if value < node.value, go left
           if (value < node.value) {
             // if no left child, append new node
             if (!node.left) {
               node.left = newNode
             } 
             // if left child, look left again
             else {
               searchTree(node.left)
             }
           }
           // if value > node.value, go right
           else if (value > node.value) {
             // if no right child, append new node
             if (!node.right) {
               node.right = newNode
             }
             // if right child, look right again
             else {
               searchTree(node.right)
             }
           }
         }
     
         searchTree(this.root)
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

   calculate(){
      let curent = this.root
       if (curent.left == null && curent.right == null){
           console.log(curent)
       }

   }

   changeRoot(newRoot){
    let currentRoot
    currentRoot = bt.bfs()  //TODO: difrent serch?
    console.log(currentRoot)
    bt = new BT(newRoot)
    currentRoot.forEach(test)
   };
}

function test(value: any){
  bt.insert(value)
}
  
let bt = new BT(3)
console.log(bt)
