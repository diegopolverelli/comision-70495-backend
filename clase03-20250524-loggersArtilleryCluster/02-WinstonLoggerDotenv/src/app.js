import __dirname, { logger } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { config } from './config/config.js';

const PORT=config.PORT;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.use("/api/testLogger", (req, res)=>{
    logger.error("log error...!!!")
    logger.log("error","log error...!!!")

    logger.warn("warning")
    logger.info("info")
    logger.http("http message")
    logger.verbose("verbose message")
    logger.debug("debug message")
    logger.silly("silly message")


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Pruebas log OK...!!!"});

})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.debug(`Server escuchando en puerto ${PORT}`);
});
