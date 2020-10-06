// binary tree 
// node class
var node = /** @class */ (function () {
    function node(value, index, operator, isOperator) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.index = index;
        this.operator = operator;
        this.isOperator = isOperator;
    }
    ;
    node.prototype.calculate = function (isOperator) {
        if (isOperator == false) {
            console.log(this.value);
            return this.value;
        }
        else if (isOperator == true) {
            if (this.operator == "*") {
                this.value = this.left.calculate * this.right.calculate;
            }
            else if (this.operator == "/") {
                this.value = this.left.calculate / this.right.calculate;
            }
            else if (this.operator == "+") {
                this.value = this.left.calculate + this.right.calculate;
            }
            else if (this.operator == "-") {
                this.value = this.left.calculate - this.right.calculate;
            }
            ;
        }
        ;
    };
    ;
    return node;
}());
;
// tree class
var BT = /** @class */ (function () {
    function BT(operator) {
        this.root = new node(null, 0, operator, true);
        this.count = 0;
    }
    ;
    BT.prototype.insert = function (value, inputindex, operator, isOperator, nodeLeft) {
        this.count++; //TODO: increses the conte of the number of nodes
        var newNode = new node(value, this.count, operator, isOperator);
        var nodeIndex; //TODO
        var indexserch = function (test) {
            if (inputindex == test.index) {
                if (nodeLeft == true) {
                    test.left = newNode; //TODO
                }
                else if (nodeLeft == false) {
                    test.right = newNode;
                }
                else
                    console.log("something went wrong");
            }
            else if (test.left)
                indexserch(test.left);
            else if (test.right)
                indexserch(test.right);
        };
        indexserch(this.root);
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
            ;
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            ;
        }
        ;
        return result;
    };
    ;
    BT.prototype.changeRoot = function (operator) {
        var currentRoot;
        currentRoot = bt.bfs(); //TODO:add difrent serch?
        console.log(currentRoot);
        bt = new BT(operator);
        currentRoot.forEach(partOfChangeRoot);
    };
    ;
    return BT;
}());
;
function partOfChangeRoot(value, index, operator, isOperator, nodeLeft) {
    bt.insert(value, index, operator, isOperator, nodeLeft);
}
;
var bt = new BT("-");
bt.insert(null, 2, "+", true, false);
bt.insert(1, 3, null, false, true);
bt.insert(2, 4, null, false, true);
bt.insert(4, 5, null, false, true);
console.log(bt);
