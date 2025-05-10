import express from 'express';
import {fork} from "child_process"
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let contador = 0
app.get('/', (req, res) => {
    contador++
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`Home - Visitas: ${contador}`);
})

app.get('/saludo', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Holis...???');
})

app.get('/random', (req, res) => {

    let random = Math.random()
    let numero = Math.round(random * 100) / 100
    let numero2 = (random).toFixed(2)
    let numero3 = Math.floor(random * 100) / 100

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`Numero generado: ${numero} / ${numero2} / ${numero3}`);
})


const calculo = () => {
    let result = 0
    console.log("empieza proceso pesado")
    console.time("demora")
    for (let i = 0; i < 10_000_000_000; i++) {
        // for (let i=0; i<100; i++){
        result += 1
    }

    console.timeEnd("demora")
    return result
}

app.get('/calculo', (req, res) => {

    let resultado = `El resultado es ${calculo()}`

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(resultado);
})

app.get('/calculo2', (req, res) => {

    let child=fork("./src/08-calculo.js")
    child.send(`Soy el proceso principal, con pid ${process.pid} y necesito que te ejecutes...!!!`)

    child.on("message", mensaje=>{
        if(mensaje.type=="resultado"){
            let resultado = `El resultado es ${mensaje.result}`
        
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).send(resultado);

        }
    })
})



const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT} - pid: ${process.pid}`);
});
