let global = 1 
function boe(Var){ return Var + 1 }
function editGlobal() { global + 1 }
let newvar = boe(20) // 21
editGlobal() // global = 2
editGlobal() // global = 3
