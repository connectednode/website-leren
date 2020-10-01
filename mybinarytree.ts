// binary tree

// node class
class node{
  value: any               //TODO
  right: any               //TODO
  left: any                //TODO
  operator: any            //TODO
  isOpertor: boolean       //TODO
  index: number
   constructor(value, operator, isOperator, index){
       this.value = value 
       this.operator = operator
       this.isOpertor = isOperator
       this.left = null
       this.right = null
       this.index = index
   }

   calculate(){
    if (this.isOpertor == false) {
      return this.value
    }
    else if (this.isOpertor == true){
    if(this.value == "*"){
      this.left.calculate * this.right.calculate
    }
    else if(this.value == "/"){

    }
    else if(this.value == "+"){

    }
    else if(this.value == "-"){

    }
  }

   }

}



// tree class
class BT{
   root: node
   count: number
   constructor(value, operator, isOperator) {
       this.root = new node(value, operator, isOperator, 1)
       this.count = 1
   }

  insert(value, operator, isOperator, index, nodeLeft){
    this.count++ //TODO: increses the conte of the number of nodes
    let newNode = new node(value, operator, isOperator, index)
    
    if(nodeLeft == true){
      
    }

    else if(nodeLeft == false){

    }
    else
    console.log("something went wrong")

  }




   changeRoot(value, operator, isOperator, index){
    let currentRoot
    // currentRoot = bt.bts()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(value, operator, isOperator)
    currentRoot.forEach(test)
   };
}

function test(value, operator, isOperator, index, nodeLeft){
  bt.insert(value, operator, isOperator, index, nodeLeft)
}
  
let bt = new BT(null, "+", true)
console.log(bt)
