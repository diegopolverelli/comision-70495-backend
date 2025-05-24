require("colors")

const saludo1=(texto)=>{
    console.log(`${texto}`.rainbow)
}

const saludo2=(texto)=>{
    console.log(`${texto}`.zebra)
}


module.exports={saludo1, saludo2}

