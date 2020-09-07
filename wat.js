var i
var nummer1 = {
    numcurent : 0,
    numadd : "",
    test : function () {
        this.numcurent += this.numadd;
        return this.numcurent *= 1
    }
};
var nummeropslag = {};

console.log(nummeropslag);

const resultaat = document.getElementById("uit");

function numToVar(x){
    nummer1.numadd = x
    innerHTML = nummer1.test();
    resultaat.innerHTML = nummer1.numcurent
    console.log(nummer1)
};

function numToStorag(i=+2, x) {
    nummeropslag. = nummer1.numcurent
    nummeropslag. = x
}
