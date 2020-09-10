var num = [0, 0];
var op = [""];
var i = 0;
function numin(inpute, w) {
    num[w] = inpute;
}
;
function opin(inpute, w) {
    op[w] = inpute;
}
;
function sorter1(x) {
    return op.indexOf(x);
}
;
function sorter(x) {
    i = op.indexOf(x);
}
;
function bereken(i) {
    var a = 0;
    if (op[i] === "/") {
        return a = num[i] / num[i++];
    }
    else if (op[i] === "*") {
        return a = num[i] * num[i++];
    }
    else if (op[i] === "-") {
        return a = num[i] - num[i++];
    }
    else if (op[i] === "+") {
        return a = num[i] + num[i++];
    }
    else if (op[i] === "") {
        console.log("no operator");
    }
    else {
        console.log("not a operator");
    }
}
;
// TODO : aray decoder
// TODO : aray editor
// TODO : inputorder
