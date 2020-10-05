// binary tree

// type declaraton
type operators = "+" | "-" | "*" | "/" | null

// node class
class node{
  value: number          //TODO
  right: any               //TODO
  left: any                //TODO
  index: number            //TODO
  operator: operators
  isOperator: boolean
   constructor(value, index, operator, isOperator){

       this.value = value  
       this.left = null
       this.right = null
       this.index = index
       this.operator = operator
       this.isOperator = isOperator

   }

   calculate(isOperator){  //TODO:make it a loop
   
    if(isOperator == false){
      console.log(this.value)
      return this.value
    }
    
    else if (isOperator == true){
    if(this.operator == "*"){
     this.value = this.left.calculate * this.right.calculate
    }
    else if(this.operator == "/"){
     this.value = this.left.calculate / this.right.calculate
    }
    else if(this.operator == "+"){
     this.value = this.left.calculate + this.right.calculate
    }
    else if(this.operator == "-"){
     this.value = this.left.calculate - this.right.calculate
    }
  }

   }

}



// tree class
class BT{
   root: node
   count: number
   constructor(operator) {
       this.root = new node(null, 1, operator,true  )
       this.count = 1
   }

  insert(value, index, operator, isOperator, nodeLeft){
    this.count++ //TODO: increses the conte of the number of nodes
    let newNode = new node(value, index, operator, isOperator)
    
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



   changeRoot(operator){
    let currentRoot
    // currentRoot = bt.bts()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(operator)
    currentRoot.forEach(test)
   };
}

function test(value, index,operator, isOperator, nodeLeft){
  bt.insert(value, index,operator, isOperator, nodeLeft)
}
  
let bt = new BT(0)
bt.insert (null, 2,"+", true, false)
bt.insert (1, 3, null, false, true)
bt.insert (2, 4, null, false, true)
bt.insert (4, 5, null, false, true)
console.log(bt)
