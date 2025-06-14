import {describe, it} from "mocha"
import {expect} from "chai"
import supertest from "supertest"

import mongoose, { isValidObjectId } from "mongoose"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log("error: ", error.message)
}

const requester=supertest("http://localhost:8080")

describe("Prueba router sessions", function(){
    this.timeout(10_000)

    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    this.userMock={
        first_name:"test",
        last_name:"test",
        email:"test@test.com",
        password:"123"
    }

    this.cookie=undefined

    it("Si envio un usuario valido a /api/sessions/register, con post, lo crea en DB", async()=>{
        let {body}=await requester.post("/api/sessions/register").send(this.userMock)

        expect(body).to.has.property("payload")
        expect(isValidObjectId(body.payload)).to.be.true
    })

    it("Si envio datos validos de un user previamente registrado a /api/session/login, post, genera una cookie de nombre coderCookie", async()=>{
        let {headers, body}=await requester.post("/api/sessions/login").send(this.userMock)

        // console.log(headers)
        // console.log(body)

        this.cookie=headers["set-cookie"][0]
        let nombreCookie=this.cookie.split("=")[0]



        expect(nombreCookie).to.be.ok.and.to.be.eq("coderCookie")

    })

    it("Si hago un get a /api/sessions/current, enviando una cookie con datos del usuario logueado, retorna los datos del usuario", async()=>{
        let {body}=await requester.get("/api/sessions/current")
                                  .set("Cookie", `${this.cookie}; otraCookie3=300; otraCookieMas=chau...!!!` )

        expect(body).to.has.property("payload")
        expect(body.payload).to.has.property("email").and.to.be.eq(this.userMock.email)
    })


})