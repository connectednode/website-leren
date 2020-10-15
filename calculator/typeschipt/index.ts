var output = document.getElementById("output")
var inpute = document.getElementById("searchTxt")
var error = document.getElementById("error")
let sum: string

function start(){
    inputeToVal()
    calculate()
}

function inputeToVal(){
let tester = inpute.value


 var letters = /^[A-Za-z]+$/;
 if(tester.match(letters))
   {
    sum = "" 
    error.innerHTML = "no letters"
   }
 else
   {
   sum =tester
   }

}


function calculate(){
    console.log(eval(sum))
    output.innerHTML = eval(sum)
}