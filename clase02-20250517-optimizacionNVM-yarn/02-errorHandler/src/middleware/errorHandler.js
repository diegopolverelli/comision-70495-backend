import fs from "fs"

const rutaLog="./src/logs/error.log"

export const errorHandler=(error, req, res, next)=>{
    // console.log(error.message)
    if(fs.existsSync(rutaLog)){
        fs.appendFileSync(rutaLog, `\n - Fecha: ${new Date()} - ${JSON.stringify({name:error.name, message:error.message})}`)
    }else{
        fs.writeFileSync(rutaLog, `Fecha: ${new Date()} - ${JSON.stringify({name:error.name, message:error.message})}`)
    }

    if(error.custom){
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`${error.message}`, cause:error.cause})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Se ha detectado un error - contacte al administrador`})
    }
}