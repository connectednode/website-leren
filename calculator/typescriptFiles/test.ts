function replace_all(what, repl, content) {
  var str = content;
  var n = str.search(what);
  if (n > -1) {
    str = str.replace(what, repl);
    return replace_all(what, repl, str);
  } else {
    return str;
  }
}
let calc = "() + (1+1) + 2";
calc = replace_all(/\(/i, "", calc);
calc = replace_all(/\)/i, "", calc);
console.log(calc);
