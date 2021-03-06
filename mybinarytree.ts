// binary tree 

// type declaraton
type operators = "+" | "-" | "*" | "/" | null

// node class
class node{
  value: number
  right: any
  left: any
  index: number
  operator: operators
  isOperator: boolean
   constructor(value, index, operator, isOperator){

       this.value = value  
       this.left = null
       this.right = null
       this.index = index
       this.operator = operator
       this.isOperator = isOperator

   };

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
    };
  };
   };
};



// tree class
class BT{
   root: node
   count: number
   constructor(operator) {
       this.root = new node(null, 0, operator,true  )
       this.count = 0
   };

  insert(value, inputindex, operator, isOperator, nodeLeft){
    this.count++ //TODO: increses the conte of the number of nodes
    let newNode = new node(value, this.count, operator, isOperator)
    
    let nodeIndex = inputindex   //TODO
     
      function indexsearch(test){ // TODO: fix the serch algerithem it dosent surch all
      let queue = []
      queue.push(test)

      while (queue.length) {
        let node = queue.shift()
        if (nodeIndex == node.index) {
    if(nodeLeft == true){
      node.left = newNode 
    }
    else if(nodeLeft == false){
     node.right = newNode
    };
    }

     else if(node.left != null){queue.push(node.left)}
     else if(node.right != null){queue.push(node.right)}
     
  }

  };

  indexsearch(this.root)
  };

  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while(queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      };
      if (currentNode.right) {
        queue.push(currentNode.right)
      };
    };

    return result
  };



   changeRoot(operator){
    let currentRoot
    currentRoot = bt.bfs()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(operator)
    currentRoot.forEach(partOfChangeRoot)
   };
};

function partOfChangeRoot(value, index,operator, isOperator, nodeLeft){
  bt.insert(value, index,operator, isOperator, nodeLeft)
};

let bt = new BT("-")
bt.insert (null, 0,"+", true, false)
bt.insert (1, 1, null, false, true)
bt.insert (2, 1, null, false, false)
bt.insert (4, 3, null, false, true)
console.log(bt)
