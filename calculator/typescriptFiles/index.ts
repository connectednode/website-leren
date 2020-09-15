type Operator = "/" | "*" | "+" | "-" | "**" | "";

let calculationGroups = []
let numbers: number[] = [10, 20, 30, 40, 50];
let operators: Operator[] = ["**","**","**","**"];

// let i: number = 0

// let w: number = 0

// function numin(inpute: number, w: number){
//     numbers[w] = inpute
// };

// function opin(inpute: Operator, w: number){
//     operators[w] = inpute
// };



function calculate (){
    let result = numbers[0] 

    numbers.forEach((number, index) => {
        if(index > 0){

            let prev = result
            let op = operators[index -1]

            if(op === "/"){
                result = result / number 
            };   
    
            if(op === "*"){
                result = result * number 
            };   

            if(op === "+"){
                result = result + number
            };

            if(op === "-"){
                result = result - number 
            };  

            if(op === "**"){
                result = result ** number 
            };

            // if(op === "**"){
            //     result = result ** number 
            // };


            console.log(`${prev} ${op} ${number} = ${result} `, number, op, result)
        
        };
    });


    return result
};

calculate ()

let calculation = "(1+1) * (2+2) + (5+5)"
let tmp = calculation

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

tmp = tmp.replace("(", "")
tmp = tmp.replace(")", "")

tmp = tmp.replace("(", "")
tmp = tmp.replace(")", "")

tmp = tmp.replace("(", "")
tmp = tmp.replace(")", "")

let ops = []
let o = tmp.split(" ")

o.forEach(op => {
    if(op){
        ops.push(op)
    }
});

//console.log(groups, tmp, ops)


groups.forEach(group => {
    let r = group.split("+") 

    let num1 = parseInt(r[0])
    let num2 = parseInt(r[1]) 
    let calc = num1 + num2

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