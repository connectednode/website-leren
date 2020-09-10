type Operator = "/" | "*" | "+" | "-" | "" ;

let num: number[] = [0, 0];

let op: Operator[] = [""];

function numin(inpute: number, w: number){
    num[w] = inpute
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

