import express from 'express';
import { router as ticketsRouter } from './routes/tickets.router.js';
import { connDB } from './config/db.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/tickets", ticketsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


connDB()