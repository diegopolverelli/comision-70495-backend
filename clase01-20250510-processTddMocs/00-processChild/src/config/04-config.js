import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
    override: true
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