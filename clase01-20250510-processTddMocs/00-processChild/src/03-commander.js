import {Command, Option} from "commander"
import express from 'express';

const programa=new Command()

programa.option("-p, --port <PORT>", "Puerto de escucha del server", 3000)
programa.option("-d, --debug", "Activa el modo debug")
programa.option("-c, --colors [COLORS...]", "Listado de colores")
programa.requiredOption("-u, --user <USER>", "Usuario que ejecuta el script")
programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("dev"))

programa.parse()
let opts=programa.opts()

console.log(opts)
if(opts.colors){
    console.log("Colores:", opts.colors)
}

const PORT=opts.port;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


