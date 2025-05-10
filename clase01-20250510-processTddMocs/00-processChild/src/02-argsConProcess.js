let [, , ...argumentos]=process.argv  // los ... son en este contexto el operador REST
// console.log(argumentos)

let indicePort=argumentos.findIndex(e=>e=="--port")
if(indicePort==-1){
    console.log(`No se ha completado el argumento --port, y es requerido`)
    process.exit()
}

console.log(`Server escuchando en puerto ${argumentos[indicePort + 1]}`)