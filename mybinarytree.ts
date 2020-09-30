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
   constructor(value, operator, isOperator, index) {
       this.root = new node(value, operator, isOperator, index)
       this.count = 1
   }

  insert(value, operator, isOperator, index){
    this.count++ //TODO: increses the conte of number of nodes
    let newNode = new node(value, operator, isOperator, index)
    
  }




   changeRoot(value, operator, isOperator, index){
    let currentRoot
    // currentRoot = bt.bts()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(value, operator, isOperator, index)
    currentRoot.forEach(test)
   };
}

function test(value, operator, isOperator, index){
  bt.insert(value, operator, isOperator, index)
}
  
let bt = new BT(null, "+", true, 1)
console.log(bt)
