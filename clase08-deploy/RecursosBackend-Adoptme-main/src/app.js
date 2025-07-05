import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { logger2 } from './utils/index.js';


const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO_URL)

app.use(express.json());
app.use(cookieParser());
app.use(express.static("./src/public"))

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.use((error, req, res, next)=>{
    logger2.grave(error.message)
    res.setHeader('Content-Type','application/json');
    return res.status(500).json({error:`Error inesperado en el server`})
})

// app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
app.listen(PORT,()=>{
    logger2.leve(`Listening on ${PORT}`)
})
