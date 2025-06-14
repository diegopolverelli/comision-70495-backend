import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import { describe, it } from "mocha"
// import Assert from "assert"

import {expect} from "chai"


try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log(`Error al conectar DB`)
}

// const assert = Assert.strict

const usersDAO = new Users()


describe("Test dao users utilizando dependencia Chai", function () {
    this.timeout(10_000)

    // before, after, beforeEach, afterEach

    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("Si ejecuto el método get, retorna un array", async () => {
        let resultado = await usersDAO.get()

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.true
        expect(resultado).to.be.an('array');
    })

    it("El método save si recibe datos válidos, graba un usuario en la DB", async () => {
        let userMock = {
            first_name: "test",
            last_name: "test",
            email: "test@test.com",
            password: "123"
        }

        let datoDesdeDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.equal(datoDesdeDB, null)
        expect(datoDesdeDB).to.be.null

        let resultado=await usersDAO.save(userMock)

        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
        // assert.equal(isValidObjectId(resultado._id), true)
        expect(isValidObjectId(resultado._id)).to.be.true
        // assert.ok(resultado.email)
        expect(resultado.email).to.be.ok
        // assert.equal(resultado.email, userMock.email)
        expect(resultado).to.have.property("email").and.to.be.eq(userMock.email)
        
        datoDesdeDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.notEqual(datoDesdeDB, null)
        expect(datoDesdeDB).not.to.be.null
        // assert.ok(datoDesdeDB._id)
        expect(datoDesdeDB._id).to.be.ok
        // assert.ok(datoDesdeDB.email)
        expect(datoDesdeDB.email).to.be.ok
        // assert.equal(datoDesdeDB.email, userMock.email)
        expect(datoDesdeDB).to.have.property("email").and.to.be.eq(userMock.email)
        

    })


})