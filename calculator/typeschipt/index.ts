import { calculate } from "./calculate";
var output = document.getElementById("output")
let sum = "2*(5/2+(3-2)/(4**9))"
output.innerHTML = calculate(sum)