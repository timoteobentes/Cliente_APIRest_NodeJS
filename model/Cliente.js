const mongoose = require("mongoose");

const CLiente = mongoose.model("Cliente", {
    nome: String,
    telefone: Number,
    cpf: Number,
    placaCarro: String
})

module.exports = CLiente;