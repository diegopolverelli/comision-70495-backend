import { suma } from "./suma.js"
import colors from "colors"

console.log('\x1b[34m\x1b[1mEjemplo TDD\x1b[0m')
let pruebas=0
let ok=0
let resultado
let esperado

console.time("Tiempo de ejecución del test:")

pruebas++
console.log(`Prueba ${pruebas}: si recibo 2 numeros, retorna la suma de ambos`)
resultado=suma(4, 3)
esperado=7
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${pruebas} ${"superada".bgGreen.bold}...!!!`)
}else{
    console.log(`Prueba ${pruebas} ${"fallida".bgRed.bold}`)
}

pruebas++
console.log(`Prueba ${pruebas}: si no recibo argumentos, retorna null`)
resultado=suma()
esperado=null
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${pruebas} ${"superada".bgGreen.bold}...!!!`)
}else{
    console.log(`Prueba ${pruebas} ${"fallida".bgRed.bold}`)
}


pruebas++
console.log(`Prueba ${pruebas}: si recibo algún valor no numérico retorna "error"`)
resultado=suma(8, "Fernanda")
esperado="error"
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${pruebas} ${"superada".bgGreen.bold}...!!!`)
}else{
    console.log(`Prueba ${pruebas} ${"fallida".bgRed.bold}`)
}

pruebas++
console.log(`Prueba ${pruebas}: si recibo varios valores numéricos, retorna la suma de todos ellos`)
resultado=suma(1, 2, 3, 4, 5)
esperado=15
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${pruebas} ${"superada".bgGreen.bold}...!!!`)
}else{
    console.log(`Prueba ${pruebas} ${"fallida".bgRed.bold}`)
}



console.log("\n\n")
console.timeEnd("Tiempo de ejecución del test:")
console.log(`Prueba efectuadas: ${pruebas} - pruebas correctas ${String(ok).bgGreen.bold} - pruebas fallidas ${String(pruebas-ok).bgRed.bold}`)
