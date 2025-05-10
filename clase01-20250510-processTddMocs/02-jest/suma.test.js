const { suma } = require("./suma.js")

describe("Pruebas función suma", ()=>{

    it("Si recibo 2 numeros, retorna la suma de ambos",()=>{
        expect(suma(5,5)).toBe(10)
        expect(suma(3,4)).toBe(7)
        expect(suma(-5,5)).toBe(0)
        expect(suma(15,5)).toBe(20)
    })

    it("Si no recibo argumentos retorna null", ()=>{
        expect(suma()).toBe(null)
        expect(suma()).toBeNull()
    })

    it("Si recibo args no numéricos, retorna error", ()=>{
        expect(suma(false, 104)).toBe("error")
        expect(suma(10, {name:"juan"})).toBe("error")
        expect(suma(10, "Fernanda")).toBe("error")
    })

    it("Si recibo n números, retorna la suma de todos ellos", ()=>{
        expect(suma(1,2,3,4,5)).toBe(15)
        expect(suma(1,2,3,4,5,100)).toBe(115)
    })

})