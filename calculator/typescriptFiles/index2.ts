let calculation = "(1+1) * (2/2) + (3-3)"
let tmp = calculation
let i = 0
let splits = calculation.split("(")

let groups = []
let groupResults = []

splits.forEach(split => {
    let end = split.split(")")

    if(end[0]){
        groups.push(end[0])
        tmp = tmp.replace(end[0], "")
    }
});

function replace_all(what: any, repl: any, content: any) {
    var str = content;
    var n = str.search(what);
    if (n > -1) {
      str = str.replace(what, repl);
      return replace_all(what, repl, str);
    } else {
      return str;
    }
};

  tmp = replace_all(/\(/i, "", tmp);
  tmp = replace_all(/\)/i, "", tmp);

let ops = []
let o = tmp.split(" ")

o.forEach(op => {
    if(op){
        ops.push(op)
    }
});

console.log("GROUPS", groups, tmp, ops)


groups.forEach(group => {
    let multiply  = group.search(/\*/)
    if(multiply != -1){
        let r = group.split("*") 
        let num1 = parseInt(r[0])
        let num2 = parseInt(r[1]) 
        var calc = num1 * num2
    };
    let devide  = group.search(/\//)
    if(devide != -1){
        let r = group.split("/") 
        let num1 = parseInt(r[0])
        let num2 = parseInt(r[1]) 
        var calc = num1 / num2
    };
    let subtraction  = group.search(/\-/)
    if(subtraction != -1){
        let r = group.split("-") 
        let num1 = parseInt(r[0])
        let num2 = parseInt(r[1]) 
        var calc = num1 - num2
    };
    let adition  = group.search(/\+/)
    if(adition != -1){
        let r = group.split("+") 
        let num1 = parseInt(r[0])
        let num2 = parseInt(r[1]) 
        var calc = num1 + num2
    };
    groupResults.push(calc)
});


console.log(calculation, ops, groups, groupResults)

let finalResult = groupResults[0]

groupResults.forEach((gr, index) => {
    if(index > 0){

        let prev = finalResult
        let currentOperator = ops[index -1]
       
        if(currentOperator === "/"){
            finalResult = finalResult / gr 
        };   

        if(currentOperator === "*"){
            finalResult = finalResult * gr 
        };   

        if(currentOperator === "+"){
            finalResult = finalResult + gr 
        };

        if(currentOperator === "-"){
            finalResult = finalResult - gr 
     
        };
        console.log(`${prev} ${currentOperator} ${gr} = ${finalResult} `)  
    }
});

