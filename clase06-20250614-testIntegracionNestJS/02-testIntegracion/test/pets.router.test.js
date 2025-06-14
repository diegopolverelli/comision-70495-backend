import {describe, it} from "mocha"
import {expect} from "chai"
import supertest from "supertest"
import fs from "fs"
// import { server } from "../src/app.js"

import mongoose, { isValidObjectId } from "mongoose"

const requester=supertest("http://localhost:8080")
// const requester=supertest(server)

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log("error: ", error.message)
}

describe("Test a router de mascotas", function(){
    this.timeout(10_000) 

    describe("Test simples a router mascotas", ()=>{
        
        after(async()=>{
            await mongoose.connection.collection("pets").deleteMany({specie:"test"})
        })

        it("Si ejecuto un get a /api/pets, retorna un status code 200", async()=>{
            // let resultado=await requester.get("/api/pets")     //.set("authorization", "Bearer adfsad8asdf.asdf8asdf8asdf.asdf9asdf9as")
            // console.log(JSON.stringify(resultado, null, 5))
            // console.log(resultado)
            let {statusCode} =await requester.get("/api/pets")  
            expect(statusCode).to.be.eq(200)
        })

        it("Si ejecuto un get a /api/pets, retorna un json con una property status con valor 'success'", async()=>{
            // let resultado=await requester.get("/api/pets")     //.set("authorization", "Bearer adfsad8asdf.asdf8asdf8asdf.asdf9asdf9as")
            // console.log(JSON.stringify(resultado, null, 5))
            // console.log(resultado)
            let {body} =await requester.get("/api/pets")  
            expect(body).to.has.property("status").and.to.be.equal("success")
        })

        it("Si ejecuto un get a /api/pets, retorna un json con una property payload de tipo array", async()=>{
            // let resultado=await requester.get("/api/pets")     //.set("authorization", "Bearer adfsad8asdf.asdf8asdf8asdf.asdf9asdf9as")
            // console.log(JSON.stringify(resultado, null, 5))
            // console.log(resultado)
            let {body} =await requester.get("/api/pets")  
            expect(body).to.has.property("payload").and.to.an("array")
        })

        it("Si ejecuto un get a /api/pets, retorna un json con una property payload de tipo array de mascotas que viene desde la DB", async()=>{
            // let resultado=await requester.get("/api/pets")     //.set("authorization", "Bearer adfsad8asdf.asdf8asdf8asdf.asdf9asdf9as")
            // console.log(JSON.stringify(resultado, null, 5))
            // console.log(resultado)
            let {body} =await requester.get("/api/pets")  
            expect(body).to.has.property("payload").and.to.an("array")
            if(body.payload && Array.isArray(body.payload) && body.payload.length>0){
                expect(body.payload[0]._id).to.be.ok
                expect(isValidObjectId(body.payload[0]._id)).to.be.true
                expect(body.payload[0].specie).to.be.ok
            }
        })

        it("Si envio los datos de una mascota válida a /api/pets, método post, retorna un objeto con la property status igual a success", async()=>{
            let petMock={
                name:"Marshall", 
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {body, statusCode}=await requester.post("/api/pets").send(petMock)

            expect(body).to.has.property("status").and.to.be.eq("success")
        })


        it("Si envio los datos de una mascota válida a /api/pets, método post, genera un pet en la DB", async()=>{
            let petMock={
                name:"Marshall", 
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {body, statusCode}=await requester.post("/api/pets").send(petMock)

            expect(body).to.has.property("payload")
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
        })

        it("Si envio los datos inválidos de una mascota a /api/pets, método post, retorna un objeto con la property status igual a error", async()=>{
            let petMock={
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {body, statusCode}=await requester.post("/api/pets").send(petMock)

            expect(body).to.has.property("status").and.to.be.eq("error")
        })

        it("Si envio los datos inválidos de una mascota a /api/pets, método post, retorna status code de http 400", async()=>{
            let petMock={
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {statusCode, statusType}=await requester.post("/api/pets").send(petMock)

            expect(statusCode).to.be.eq(400)
            expect(statusType).to.be.eq(4)
        })

        it("Si envio los datos válidos de una mascota a /api/pets, método post, retorna status code de http 200", async()=>{
            let petMock={
                name:"Marshall",
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {statusCode, statusType}=await requester.post("/api/pets").send(petMock)

            expect(statusCode).to.be.eq(200)
            expect(statusType).to.be.eq(2)
        })
    })

    describe("Test complejos a router mascotas", ()=>{
        it("Si envio un post a /api/pets/withImage, con datos válidos, se genera una mascota en DB y se carga una imagen", async()=>{

            let petMock={
                name:"Roger",
                specie:"test", 
                birthDate:"2019-02-12"
            }

            let {body} = await requester.post("/api/pets/withImage")
                                    .field("name", petMock.name)
                                    .field("specie", petMock.specie)
                                    .field("birthDate", petMock.birthDate)
                                    .attach("image", "../img-roger.jpg")

            expect(body).to.has.property("status").and.to.be.eq("success")
            expect(body).to.has.property("payload")
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(body.payload).to.has.property("specie")
            expect(body.payload).to.has.property("image")
            expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)
        })
    })

})