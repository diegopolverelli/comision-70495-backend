import express from 'express';
import { sequelize } from './config/connDB.js';

import { router as usuariosRouter } from './routes/usuarios.router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

await sequelize.sync();
console.log('All models were synchronized successfully.');


