import {fakerES_MX as fa} from "@faker-js/faker"

for(let i=0; i<10; i++){
    console.log("animal, perro", fa.animal.dog())
    console.log("autor libro", fa.book.author())
    console.log("producto", fa.commerce.product())
    let nombre=fa.person.firstName("female")
    let apellido=fa.person.lastName()
    console.log("nombres:", nombre, apellido)
    console.log("email:", fa.internet.email({firstName: nombre, lastName: apellido, provider: "hotmail.com"}))
    console.log("*********\n")
}