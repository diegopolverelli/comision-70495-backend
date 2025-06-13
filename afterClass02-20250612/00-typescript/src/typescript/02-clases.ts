export const clases="clases en typescript"
export let clases2=""

// let algo:undefined=undefined

let otraCosa:any

otraCosa=[1,2,3,4]
otraCosa="Juan"
otraCosa=false

clases2=``


class Heroe{
    name:string
    age:number

    constructor(name:string){
        this.name=name
        this.age=20
    }

    saludar(dato:string){
        dato="hola"
        // return `hola, soy ${this.name}. Tengo ${this.age} años`
        return 100
    }
}

let batman=new Heroe("Bruce Wayne")
console.log(batman.saludar("hola"))


let robin:Heroe
robin={
    name:"Dick Grayson", 
    age:18, 
    saludar(){
        return 1000
    }
}

const suma=(a:number, b:number):string=>{
    return `${a+b}`
}

console.log(suma(90, 7))

