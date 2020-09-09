var x = 1;
var y = "/";
var z = 2;
var a = 0;
function bereken(x, y, z) {
    if (y === "/") {
        return a = x / z;
    }
    else if (y === "*") {
        return a = x * z;
    }
    else if (y === "-") {
        return a = x - z;
    }
    else if (y === "+") {
        return a = x + z;
    }
}
;
bereken(3, "*", 2);
console.log(a);
