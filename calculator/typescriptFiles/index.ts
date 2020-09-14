type Operator = "/" | "*" | "+" | "-" | "" ;

let num: number[] = [0, 0];

let op: Operator[] = [""];

let i: number = 0

function numin(inpute: number, w: number){
    num[w] = inpute
};

function opin(inpute: Operator, w: number){
    op[w] = inpute
};

// function sorter1(){
    // let z: number
    // let x: number
    // let y: number
    // z = op.indexOf("/")
    // z = NaN
    // x = op.indexOf("*")
    // y = Math.min(z,x)
    // console.log(y)
// };

function sorter(x: Operator){
   i =  op.indexOf(x)
};

function bereken(i: number){
    let a = 0;

    if(op[i] ==="/"){
    return a = num[i] / num[i++]
    }

    else if(op[i]==="*"){
    return a = num[i]*num[i++]
    }

    else if(op[i]==="-"){
    return a = num[i]-num[i++]
    }

    else if(op[i]==="+"){
    return a = num[i]+num[i++]
    }

    else if(op[i]===""){
    console.log("no operator")
    }

    else{
    console.log("not a operator")
    }

};

// TODO : aray decoder/sorter Math.min(5, 10);
// TODO : aray editor
// TODO : inputorder