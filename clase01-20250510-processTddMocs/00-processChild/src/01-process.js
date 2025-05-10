import fs from "fs"
console.log("cwd", process.cwd())
console.log("process id (pid)", process.pid)
console.log("platform", process.platform)
console.log("version", process.version)

// console.log("variables de entorno", process.env)
console.log("variables de entorno", process.env.PRUEBA_PORT)
console.log("variables de entorno", process.env.PRUEBA_SECRET)

console.log("argumentos por consola", process.argv)

// res.setHeader('Content-Type','application/json');
// return res.status(400).json({error:`algo pasó...!!`})