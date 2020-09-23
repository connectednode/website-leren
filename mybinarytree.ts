// binary tree

// node class
class node{
    value: any
    right: any
    left: any
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
}
