const mongoose = require("mongoose");

async function conexao() {
    try {
        const conexaoParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.MONGODOB, conexaoParams);
        console.log("Conectado ao BD");
    } catch(error) {
        console.log(error);
        console.log("Erro ao conectar ao BD...");
    }
}

module.exports = conexao;