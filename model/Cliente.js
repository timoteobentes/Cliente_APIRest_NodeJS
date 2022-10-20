const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente", {
    nome: String,
    telefone: String,
    cpf: String,
    placaCarro: String
})

module.exports = Cliente;