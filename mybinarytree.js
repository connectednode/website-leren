// binary tree
// node class
var node = /** @class */ (function () {
    function node(value, operator, isOperator) {
        this.value = value;
        this.operator = operator;
        this.isOpertor = isOperator;
        this.left = null;
        this.right = null;
    }
    node.prototype.calculate = function () {
        if (this.isOpertor == false) {
            return this.value;
        }
        else if (this.isOpertor == true) {
            if (this.value == "*") {
            }
            else if (this.value == "/") {
            }
            else if (this.value == "+") {
            }
            else if (this.value == "-") {
            }
        }
    };
    return node;
}());
// tree class
var BT = /** @class */ (function () {
    function BT(value, operator, isOperator) {
        this.root = new node(value, operator, isOperator);
        this.count = 1;
    }
    BT.prototype.insert = function (value, operator, isOperator) {
        this.count++;
        var newNode = new node(value, operator, isOperator);
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
    BT.prototype.changeRoot = function (value, operator, isOperator) {
        var currentRoot;
        currentRoot = bt.bfs(); //TODO: difrent serch?
        console.log(currentRoot);
        bt = new BT(value, operator, isOperator);
        currentRoot.forEach(test);
    };
    ;
    return BT;
}());
function test(value, operator, isOperator) {
    bt.insert(value, operator, isOperator);
}
var bt = new BT(null, "+", true);
console.log(bt);
