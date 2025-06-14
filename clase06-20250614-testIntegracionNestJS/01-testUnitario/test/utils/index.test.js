import { createHash, passwordValidation } from "../../src/utils/index.js"
import { expect, should } from "chai"
import { describe, it } from "mocha"

should()

describe("Test funciontes de hash", ()=>{


    // before, etc...???

    it("Si envio una pass en texto plano, retorna algo diferente", async()=>{
        let password="abcd0001"
        let resultado=await createHash(password)

        expect(typeof resultado).to.be.eq("string")
        expect(resultado).not.true.be.eq(password)
    })

    it("Si envio una pass en texto plano, retorna algo de más de 20 caracteres", async()=>{
        let password="abcd0001"
        let resultado=await createHash(password)

        expect(resultado.length).to.be.greaterThan(20)
    })

    it("Si envio una pass en texto plano, retorna un hash de bcrypt", async()=>{
        let password="abcd0001"
        let resultado=await createHash(password)

        expect(resultado.slice(0, 4)).to.be.eq("$2b$")
        resultado.slice(0, 4).should.be.eq("$2b$")
    })

    it("Si envio a passwordValidation una clave inválida, retorna flase", async()=>{
        let password="123"
        let hash=await createHash(password)

        let userMock={
            first_name:"Juan", 
            last_name:"Gutierrez", 
            password: hash,
            email:"test@test.com", 
            role:"user"
        }

        let badPassword="456"

        let resultado=await passwordValidation(userMock, badPassword)

        expect(resultado).to.be.false
        expect(resultado).to.be.eq(false)
    })

    it("Si envio a passwordValidation una clave válida, retorna true", async()=>{
        let password="123"
        let hash=await createHash(password)

        let userMock={
            first_name:"Juan", 
            last_name:"Gutierrez", 
            password: hash,
            email:"test@test.com", 
            role:"user"
        }

        let resultado=await passwordValidation(userMock, password)

        expect(resultado).to.be.true
        expect(resultado).to.be.eq(true)
        resultado.should.be.true
    })
})