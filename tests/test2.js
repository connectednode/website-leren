var nummer

const resultaat = document.getElementById("uit")

function numToVar(x){
    x = x 
    console.log(typeof(x))
    nummer = x * 1
    console.log(typeof(nummer))
    resultaat.innerHTML = nummer
}

