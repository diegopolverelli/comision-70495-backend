import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { CustomError } from './utils/CustomError.js';
import { TIPOS_ERROR } from './utils/EErrores.js';

process.loadEnvFile("./.env")

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba1',(req,res)=>{

    let {cantidad=0}=req.query
    if(Number(cantidad)>100){
        throw new Error("Error en cantidad...!!!  (metodo sync)")
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`ruta /prueba1`});
})

app.get('/prueba2',async(req,res, next)=>{

    try {
        let {cantidad=0}=req.query
        if(Number(cantidad)>100){
            // throw new Error("Error en cantidad...!!! (metodo ASYNC)")
            CustomError.generateError("Error datos", "Error en cantidad", "Cantidad supera los 100, y es inválida", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:`ruta /prueba2`});
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(500).json({error:`ocurrió algo...!!! ERROR`})
        return next(error)
    }

})


app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
