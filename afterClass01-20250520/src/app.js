import express from 'express';
import { config } from './config/config.js';
import { connDB } from './config/database.js';


import { router as sessionsRouter } from './routes/sessions.router.js';
import { router as productsRouter } from './routes/products.router.js';
import passport from 'passport';
import { initPassport } from './config/passport.config.js';

const PORT = config.PORT;

const app = express();

// paso 2
initPassport()
app.use(passport.initialize())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter)
app.use("/api/sessions", sessionsRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.get(
    "/private",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send('Ruta privada - require token...!!!');
    }
)

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()