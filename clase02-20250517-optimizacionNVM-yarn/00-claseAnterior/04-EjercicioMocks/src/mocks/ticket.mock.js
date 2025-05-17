import { fakerES_MX as fa } from "@faker-js/faker"

const generaCliente=()=>{
    let nombre=fa.person.firstName()
    let apellido= fa.person.lastName()
    let dni=fa.number.int({min:10_000_000, max: 40_000_000})
    let email= fa.internet.email({firstName: nombre, lastName: apellido})

    return {
        nombre,
        apellido, 
        dni,
        email
    }
}

// console.log(generaCliente())

const generaProducto=()=>{
    let producto=fa.commerce.product()
    let precio=fa.number.float({min:1500, max: 12300, multipleOf: .25})
    let cantidad=fa.number.int({min:1, max: 50})
    let id=fa.string.uuid()

    return {producto, precio, cantidad, id}
}

// console.log(generaProducto())

export const generaTicket=()=>{
    let nroComp="00032-000"+fa.string.numeric({length:5})
    let fecha=fa.date.past({years:1})
    let cliente=generaCliente()
    let carrito=[]
    let total=0

    for(let i=0; i<fa.number.int({min:1, max:12}); i++){
        let producto=generaProducto()
        carrito.push(producto)
        total+=producto.precio*producto.cantidad
    }

    return {
        nroComp, 
        fecha, 
        cliente,
        carrito, 
        total
    }
}