var calculation = "(1+1) * (2/2) + (3-3)";
var tmp = calculation;
var i = 0;
var splits = calculation.split("(");
var groups = [];
var groupResults = [];
splits.forEach(function (split) {
    var end = split.split(")");
    if (end[0]) {
        groups.push(end[0]);
        tmp = tmp.replace(end[0], "");
    }
});
function replace_all(what, repl, content) {
    var str = content;
    var n = str.search(what);
    if (n > -1) {
        str = str.replace(what, repl);
        return replace_all(what, repl, str);
    }
    else {
        return str;
    }
}
;
tmp = replace_all(/\(/i, "", tmp);
tmp = replace_all(/\)/i, "", tmp);
var ops = [];
var o = tmp.split(" ");
o.forEach(function (op) {
    if (op) {
        ops.push(op);
    }
});
console.log("GROUPS", groups, tmp, ops);
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
console.log(calculation, ops, groups, groupResults);
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
