let numbers = document.getElementById("searchTxt").value

function test(){
let tmp = numbers // TODO: add spaces to front and bake of operators
let i = 0
let splits = tmp.split("(")
let groups = []
let groupResults = []

splits.forEach(split => {
    let end = split.split(")")

    if(end[0]){
        groups.push(end[0])
        tmp = tmp.replace(end[0], "")
    }
});

console.log(tmp)

function replace_all(what: any, repl: string, content: string) {
    var n = content.search(what);
    if (n > -1) {
      content = content.replace(what, repl);
      return replace_all(what, repl, content);
    } 
    else {
      return content;
    }
};

tmp = replace_all(/\(/i, "", tmp);
tmp = replace_all(/\)/i, "", tmp);

console.log(tmp)

let ops = []
let o = tmp.split(" ")

o.forEach(op => {
    if(op){
        ops.push(op)
    }
});

console.log("GROUPS", groups,"tmp", tmp,"ops", ops )


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


console.log( ops, groups, groupResults,"tmp",tmp)

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
}