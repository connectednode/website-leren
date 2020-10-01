// binary tree
// node class
var node = /** @class */ (function () {
    function node(value, index) {
        if (isNaN(value)) {
            console.log(value);
        }
        this.value = value;
        this.left = null;
        this.right = null;
        this.index = index;
    }
    node.prototype.calculate = function () {
        var test = this.value;
        return this.value;
    };
    return node;
}());
// tree class
var BT = /** @class */ (function () {
    function BT(value) {
        this.root = new node(value, 1);
        this.count = 1;
    }
    BT.prototype.insert = function (value, index, nodeLeft) {
        this.count++; //TODO: increses the conte of the number of nodes
        var newNode = new node(value, index);
        var nodeIndex = "???"; //TODO
        if (nodeLeft == true) {
        }
        else if (nodeLeft == false) {
        }
        else
            console.log("something went wrong");
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
    BT.prototype.changeRoot = function (value, index) {
        var currentRoot;
        // currentRoot = bt.bts()  //TODO:add difrent serch?
        console.log(currentRoot);
        bt = new BT(value);
        currentRoot.forEach(test);
    };
    ;
    return BT;
}());
function test(value, index, nodeLeft) {
    bt.insert(value, index, nodeLeft);
}
var bt = new BT(0);
bt.insert("+", 1, true);
bt.insert(1, 1, true);
bt.insert(2, 1, true);
bt.insert(4, 1, true);
console.log(bt);
