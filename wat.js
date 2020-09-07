var nummer
var nummer1 = {
    numcurent : 0,
    numadd : "",
    test : function () {
        this.numcurent += this.numadd;
        return this.numcurent *= 1
    }
};

const resultaat = document.getElementById("uit");

function numToVar(x){
    nummer1.numadd = x
    innerHTML = nummer1.test();
    resultaat.innerHTML = nummer1.numcurent
}

