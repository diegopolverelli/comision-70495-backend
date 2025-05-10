process.on("message", mensaje=>{
    console.log(`Soy el proceso hijo con pid ${process.pid}, y recibí este mensaje: "${mensaje}"`)
    let result = 0
    console.log("empieza proceso pesado")
    console.time("demora")
    for (let i = 0; i < 10_000_000_000; i++) {
        // for (let i=0; i<100; i++){
        result += 1
    }
    
    console.timeEnd("demora")
    // return result
    process.send({
        type:"resultado", 
        result
    })
})
