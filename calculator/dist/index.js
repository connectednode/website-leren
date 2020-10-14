"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { calculate } from "./calculate";
const inpute_1 = require("./inpute");
var output = document.getElementById("output");
let sum = "2*(5/2+(3-2)/(4**9))";
console.log(eval(sum));
output.innerHTML = eval(sum);
let test = inpute_1.input();
test;
//# sourceMappingURL=index.js.map