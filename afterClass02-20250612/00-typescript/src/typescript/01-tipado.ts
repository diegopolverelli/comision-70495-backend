export const tipado=`Tipado de de datos`

console.log(tipado)

let nombre:string="Juan"

let apellido:string | undefined | null ="Perez"

apellido="Juarez"

console.log(nombre, apellido)

let edad:number=42
edad=15
// edad=[1,2,3]

type stringOrNull=string | null

let dato001:stringOrNull

dato001="Ciudadela"
dato001=null
// dato001=false

type typePersona={
    name: string
    age?: number
    email: string
}

let persona001:typePersona

persona001={
    name:"Juan",
    email: "juan@test.com"
}

export interface personaInterface{
    name: string
    age?: number
    email: string
    saludar:()=>undefined
}

let persona002:personaInterface

persona002={
    name:"Carolina", email:"carolina@test.com",
    saludar(){
        console.log(`Hola...!!!`)
    }
}

persona002.saludar()


