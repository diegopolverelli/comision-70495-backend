import UserDTO from "../../src/dto/User.dto.js";
import {describe, it} from "mocha"
import {expect, should} from "chai"


describe("Pruebas dto users", ()=>{

    // after, before...???

    it("Si envio a la funcion 'getUserTokenFrom' un usuario con first_name y last_name, retorna solo name, con la concatenacion de ambos", ()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Gutierrez", 
            email:"test@test.com", 
            role:"user"
        }
        let resultado=UserDTO.getUserTokenFrom(userMock)

        expect(resultado).to.has.property("name").and.to.be.equal(`${userMock.first_name} ${userMock.last_name}`)
        expect(resultado.name).to.exist.and.to.be.equal(`${userMock.first_name} ${userMock.last_name}`)
        expect(resultado.name).to.exist
        expect(resultado.name).to.be.eq(`${userMock.first_name} ${userMock.last_name}`)
        expect(resultado.name).to.be.ok
    })

    it("Si envio a la funcion 'getUserTokenFrom' un usuario con first_name retorna un usuario sin esa propiedad", ()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Gutierrez", 
            email:"test@test.com", 
            role:"user"
        }
        let resultado=UserDTO.getUserTokenFrom(userMock)

        expect(resultado).not.to.has.property("first_name")

    })    

    it("Si envio a la funcion 'getUserTokenFrom' un usuario con last_name retorna un usuario sin esa propiedad", ()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Gutierrez", 
            email:"test@test.com", 
            role:"user"
        }
        let resultado=UserDTO.getUserTokenFrom(userMock)

        expect(resultado).not.to.has.property("last_name")

    })    

})