const mongoose = require("mongoose");

const CLiente = mongoose.model("Cliente", {
    nome: String,
    telefone: String,
    cpf: String,
    placaCarro: String
})

module.exports = CLiente;