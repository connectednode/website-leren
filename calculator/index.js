var calculationGroups = [];
var numbers = [10, 20, 30, 40, 50];
var operators = ["**", "**", "**", "**"];
// let i: number = 0
// let w: number = 0
// function numin(inpute: number, w: number){
//     numbers[w] = inpute
// };
// function opin(inpute: Operator, w: number){
//     operators[w] = inpute
// };
function calculate() {
    var result = numbers[0];
    numbers.forEach(function (number, index) {
        if (index > 0) {
            var prev = result;
            var op = operators[index - 1];
            if (op === "/") {
                result = result / number;
            }
            ;
            if (op === "*") {
                result = result * number;
            }
            ;
            if (op === "+") {
                result = result + number;
            }
            ;
            if (op === "-") {
                result = result - number;
            }
            ;
            if (op === "**") {
                result = Math.pow(result, number);
            }
            ;
            // if(op === "**"){
            //     result = result ** number 
            // };
            console.log(prev + " " + op + " " + number + " = " + result + " ", number, op, result);
        }
        ;
    });
    return result;
}
;
calculate();
var calculation = "(1+1) * (2+2) + (5+5)";
var tmp = calculation;
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
tmp = tmp.replace("(", "");
tmp = tmp.replace(")", "");
tmp = tmp.replace("(", "");
tmp = tmp.replace(")", "");
tmp = tmp.replace("(", "");
tmp = tmp.replace(")", "");
var ops = [];
var o = tmp.split(" ");
o.forEach(function (op) {
    if (op) {
        ops.push(op);
    }
});
//console.log(groups, tmp, ops)
groups.forEach(function (group) {
    var r = group.split("+");
    var num1 = parseInt(r[0]);
    var num2 = parseInt(r[1]);
    var calc = num1 + num2;
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
// function sorter(x: Operator){
//    i =  operators.indexOf(x)
// };
// function bereken(i: number){
//     let a = 0;
//     if(op[i] ==="/"){
//     return a = num[i] / num[i++]
//     }
//     else if(op[i]==="*"){
//     return a = num[i]*num[i++]
//     }
//     else if(op[i]==="-"){
//     return a = num[i]-num[i++]
//     }
//     else if(op[i]==="+"){
//     return a = num[i]+num[i++]
//     }
//     else if(op[i]===""){
//     console.log("no operator")
//     }
//     else{
//     console.log("not a operator")
//     }
// };
// TODO : aray decoder/sorter
// TODO : aray editor
// TODO : inputorder
