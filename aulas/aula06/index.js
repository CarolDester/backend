// 1. importar o framework
const express = require("express");

// importar middleware de terceiros
const cors = require('cors');

// importar o router.js
const router = require('./router');

// 2. criar uma instância da aplicação
const app = express();

//middleware embutido ou intgrado
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

// middleware de terceiros
app.use(cors());

//midleware de aplicação
app.use((req, res, next) => {
    console.log("Passei pelo midleware de app");
    next();
});

app.use('/tarefas', router);

// 2.1. criar um middleware
app.get('/', (req, res) => {
    res.send("Olá");
});

//midlleware de erro
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// 3. iniciar a aplicação em uma porta
app.listen(3000, ()=>{
    console.log("App está On!");
});