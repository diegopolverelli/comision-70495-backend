import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import { describe, it } from "mocha"
import Assert from "assert"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log(`Error al conectar DB`)
}

const assert = Assert.strict

const usersDAO = new Users()


describe("Test dao users", function () {
    this.timeout(10_000)

    // before, after, beforeEach, afterEach

    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("Si ejecuto el método get, retorna un array", async () => {
        let resultado = await usersDAO.get()

        assert.equal(Array.isArray(resultado), true)
    })

    it("Si ejecuto el método get, retorna un array de objetos con la property _id", async () => {
        let resultado = await usersDAO.get()

        if (Array.isArray(resultado) && resultado.length > 0) {
            assert.ok(resultado[0]._id)
        }
    })

    it("Si ejecuto el método get, retorna un array de objetos con la property first_name", async () => {
        let resultado = await usersDAO.get()

        if (Array.isArray(resultado) && resultado.length > 0) {
            assert.ok(resultado[0].first_name)
        }
    })

    it("Si ejecuto el método get, retorna un array de objetos con la property email", async () => {
        let resultado = await usersDAO.get()

        if (Array.isArray(resultado) && resultado.length > 0) {
            assert.ok(resultado[0].email)
        }
    })

    it("Si ejecuto el método get, retorna un array de usuarios de la DB", async () => {
        let resultado = await usersDAO.get()

        assert.equal(Array.isArray(resultado), true)
        if (Array.isArray(resultado) && resultado.length > 0) {
            assert.ok(resultado[0].email)
            assert.ok(resultado[0]._id)
            assert.equal(isValidObjectId(resultado[0]._id), true)
        }
    })

    it("El método save si recibe datos válidos, graba un usuario en la DB", async () => {
        let userMock = {
            first_name: "test",
            last_name: "test",
            email: "test@test.com",
            password: "123"
        }

        let datoDesdeDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        assert.equal(datoDesdeDB, null)

        let resultado=await usersDAO.save(userMock)

        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
        assert.ok(resultado.email)
        assert.equal(resultado.email, userMock.email)

        datoDesdeDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        assert.notEqual(datoDesdeDB, null)
        assert.ok(datoDesdeDB._id)
        assert.ok(datoDesdeDB.email)
        assert.equal(datoDesdeDB.email, userMock.email)
        

    })


})