import dotenv from "dotenv"

const mode="dev"
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