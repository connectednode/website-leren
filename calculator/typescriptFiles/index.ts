type Operator = "/" | "*" | "+" | "-" | "" ;

let num: number[] = [0, 0];

let op: Operator[] = [""];

let a = 0;

function bereken(i: number){
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