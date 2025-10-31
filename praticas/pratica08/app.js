require("dotenv").config();
const express = require("express");
const app = express();

const usuariosRouter = require("./routes/usuariosRouter.js");
const produtosRouter = require("./routes/produtosRouter.js"); 

app.use(express.json());

app.use("/usuarios", usuariosRouter);
app.use("/produtos", produtosRouter);

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

module.exports = app;
