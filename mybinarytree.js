// binary tree
// node class
var node = /** @class */ (function () {
    function node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    node.prototype.numOrOp = function () {
        if (typeof this.value == 'number') {
            return this.value;
        }
    };
    return node;
}());
// tree class
var BT = /** @class */ (function () {
    function BT(value) {
        this.root = new node(value);
        this.count = 1;
    }
    BT.prototype.insert = function (value) {
        this.count++;
        var newNode = new node(value);
        var searchTree = function (node) {
            // if value < node.value, go left
            if (value < node.value) {
                // if no left child, append new node
                if (!node.left) {
                    node.left = newNode;
                }
                // if left child, look left again
                else {
                    searchTree(node.left);
                }
            }
            // if value > node.value, go right
            else if (value > node.value) {
                // if no right child, append new node
                if (!node.right) {
                    node.right = newNode;
                }
                // if right child, look right again
                else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    };
    BT.prototype.bfs = function () {
        var result = [];
        var queue = [];
        queue.push(this.root);
        while (queue.length) {
            var currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    };
    BT.prototype.calculate = function () {
        var curent = this.root;
        if (curent.left == null && curent.right == null) {
            console.log(curent);
        }
    };
    BT.prototype.changeRoot = function (newRoot) {
        var currentRoot;
        currentRoot = bt.bfs(); //TODO: difrent serch?
        console.log(currentRoot);
        bt = new BT(newRoot);
        currentRoot.forEach(test);
    };
    ;
    return BT;
}());
function test(value) {
    bt.insert(value);
}
var bt = new BT(3);
console.log(bt);
