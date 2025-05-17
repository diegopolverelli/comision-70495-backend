import express from 'express';
import zlib from "zlib"
import handlebars from 'express-handlebars'
import compress from "express-compression"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(compress())
app.use(compress({brotli:{enabled:true}}))
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/texto',(req,res)=>{
    let texto=`texto muuuuuuuuuuuuuuuuuuy largo`.repeat(100_000)
    // texto=zlib.gzipSync(texto)

    res.setHeader('Content-Type','text/plain');
    // res.setHeader("Content-Encoding", "gzip")
    res.status(200).send(texto);
})



// app.get("/heroes", compress(), (req, res)=>{
app.get("/heroes", (req, res)=>{

    res.render("prueba")
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
