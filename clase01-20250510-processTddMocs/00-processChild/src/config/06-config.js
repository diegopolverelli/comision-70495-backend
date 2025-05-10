import dotenv from "dotenv"
import {Command, Option} from "commander"

const programa=new Command()

programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev"]).default("dev"))

programa.parse()
// let opts=programa.opts()

const {mode}=programa.opts()
console.log(mode)
dotenv.config({
    path:mode=="dev"?"./.env.dev":"./.env.prod", override:true
})

export const config={
    GENERAL:{
        PORT: process.env.PORT || 3010,
        SECRET: "COderCoder123"
    },
    DATABASE:{
        MONGO_URL: process.env.MONGO_URL,
        DB_NAME: "empresaXXpruebas", 
    }
}