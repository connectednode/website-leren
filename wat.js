var i
var nummer1 = {
    numcurent : 0,
    numadd : "",
    test : function () {
        this.numcurent += this.numadd;
        return this.numcurent *= 1
    }
};
var nummeropslag = {
    num1 : 0,
    num2 : "",
    num3 : 0 
};

console.log(nummeropslag);

const resultaat = document.getElementById("uit");

function numToVar(x){
    nummer1.numadd = x
    innerHTML = nummer1.test();
    resultaat.innerHTML = nummer1.numcurent
    console.log(nummer1)
};

function numToStorag(y) {
    nummeropslag.num1 = nummer1.numcurent
    nummeropslag.num2 = y
    nummer1.numcurent = 0
console.log(nummeropslag)
}

function numIs() {
    nummeropslag.num3 = nummer1.numcurent
    console.log(nummeropslag)
}
