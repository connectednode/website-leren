var nummer


const nummer1 = document.getElementById("1")
const resultaat = document.getElementById("uit")

nummer1.addEventListener('click', (event) => { numToVar(3) });
document.getElementById("1").addEventListener('click', (event) => console.log(event, "werkt"));


function numToVar(x){
    nummer = x
    resultaat.innerHTML = nummer
}

