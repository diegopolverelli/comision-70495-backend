const suma=(...sumandos)=>{  // ... son el operador REST
    if(sumandos.length==0) return null
    if(!sumandos.every(s=>typeof s=="number")) return "error"
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}

module.exports={suma}