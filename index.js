require("dotenv").config();
const conexao = require("./db");
const express = require("express");
const app = express();

conexao();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas

const cliente = require("./routes/clienteRouter");

app.use("/", cliente);

// porta de saída
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listenning on port ${PORT}...`));
