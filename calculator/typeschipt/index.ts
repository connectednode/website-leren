var output = document.getElementById("output")
var inpute = document.getElementById("searchTxt")
var error = document.getElementById("error")
let sum: string = "0"
document.getElementById("searchTxt").addEventListener("keyup", start())
function start(){
    error.innerHTML = null
    inputeToVal()
    calculate()
}

function inputeToVal(){
let tester = inpute.value


 var letters = /^[A-Za-z]+$/;
 if(tester.match(letters))
   {
    sum = "0" 
    error.innerHTML = "no letters"
   }
 else
   {
   sum =tester
   }

}


function calculate(){
    try{
        console.log(eval(sum))
        output.innerHTML = eval(sum)
    }catch {
    error.innerHTML = "syntax error"
    }
}