var element = document.getElementById("searchTxt");
var numbers = element.value;
function test() {
    var tmp = numbers; // TODO: add spaces to front and bake of operators
    var i = 0;
    var splits = tmp.split("(");
    var groups = [];
    var groupResults = [];
    splits.forEach(function (split) {
        var end = split.split(")");
        if (end[0]) {
            groups.push(end[0]);
            tmp = tmp.replace(end[0], "");
        }
    });
    console.log(tmp);
    function replace_all(what, repl, content) {
        var n = content.search(what);
        if (n > -1) {
            content = content.replace(what, repl);
            return replace_all(what, repl, content);
        }
        else {
            return content;
        }
    }
    ;
    tmp = replace_all(/\(/i, "", tmp);
    tmp = replace_all(/\)/i, "", tmp);
    console.log(tmp);
    var ops = [];
    var o = tmp.split(" ");
    o.forEach(function (op) {
        if (op) {
            ops.push(op);
        }
    });
    console.log("GROUPS", groups, "tmp", tmp, "ops", ops);
    groups.forEach(function (group) {
        var multiply = group.search(/\*/);
        if (multiply != -1) {
            var r = group.split("*");
            var num1 = parseInt(r[0]);
            var num2 = parseInt(r[1]);
            var calc = num1 * num2;
        }
        ;
        var devide = group.search(/\//);
        if (devide != -1) {
            var r = group.split("/");
            var num1 = parseInt(r[0]);
            var num2 = parseInt(r[1]);
            var calc = num1 / num2;
        }
        ;
        var subtraction = group.search(/\-/);
        if (subtraction != -1) {
            var r = group.split("-");
            var num1 = parseInt(r[0]);
            var num2 = parseInt(r[1]);
            var calc = num1 - num2;
        }
        ;
        var adition = group.search(/\+/);
        if (adition != -1) {
            var r = group.split("+");
            var num1 = parseInt(r[0]);
            var num2 = parseInt(r[1]);
            var calc = num1 + num2;
        }
        ;
        groupResults.push(calc);
    });
    console.log(ops, groups, groupResults, "tmp", tmp);
    var finalResult = groupResults[0];
    groupResults.forEach(function (gr, index) {
        if (index > 0) {
            var prev = finalResult;
            var currentOperator = ops[index - 1];
            if (currentOperator === "/") {
                finalResult = finalResult / gr;
            }
            ;
            if (currentOperator === "*") {
                finalResult = finalResult * gr;
            }
            ;
            if (currentOperator === "+") {
                finalResult = finalResult + gr;
            }
            ;
            if (currentOperator === "-") {
                finalResult = finalResult - gr;
            }
            ;
            console.log(prev + " " + currentOperator + " " + gr + " = " + finalResult + " ");
        }
    });
}
;
