// binary tree

// node class
class node{
  value: any               //TODO
  right: any               //TODO
  left: any                //TODO
  operator: any            //TODO
  isOpertor: boolean    //TODO
   constructor(value, operator, isOperator){
       this.value = value 
       this.operator = operator
       this.isOpertor = isOperator
       this.left = null
       this.right = null
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
   constructor(value, operator, isOperator) {
       this.root = new node(value, operator, isOperator)
       this.count = 1
   }

  insert(value, operator, isOperator){
    this.count++ //TODO: increses the conte of number of nodes
    let newNode = new node(value, operator, isOperator)

  }




   changeRoot(value, operator, isOperator){
    let currentRoot
    // currentRoot = bt.bts()  //TODO:add difrent serch?
    console.log(currentRoot)
    bt = new BT(value, operator, isOperator)
    currentRoot.forEach(test)
   };
}

function test(value, operator, isOperator){
  bt.insert(value, operator, isOperator)
}
  
let bt = new BT(null,"+", true )
console.log(bt)
