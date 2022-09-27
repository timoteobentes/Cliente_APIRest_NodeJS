const { deleteOne } = require("../model/Cliente");
const Cliente = require("../model/Cliente");
const router = require("express").Router();

// POST - Cadastrar cliente
router.post("/cliente", (req, res) => {

    const { nome, telefone, cpf, placaCarro } = req.body;

    if (!nome || !telefone || !cpf || !placaCarro) {
        res.send("Preencha todos os campos!");
        return;
    }

    const cliente = {
        nome,
        telefone,
        cpf,
        placaCarro
    };

    try {

        Cliente.create(cliente);

        res.status(201).json({ message: "Cliente cadastrado com sucesso!" });
        return;
    } catch(error) {
        res.status(503).json({ message: "Erro ao cadastrar cliente!" });
    }

})

// GET - Traz um cliente pelo id
router.get("/cliente/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await Cliente.findOne({ _id: id });
        
        if(!cliente) {
            res.status(422).json({ message: "Cliente não encontrado..." });
            return;
        }

        res.status(200).json(cliente);

    } catch(error) {
        res.status(500).json({ erro: error });
    }
})

// GET - traz um cliente pela placa do carro
router.get("/consulta/final-placa/:placaCarro", async (req, res) => {
    const placaCarro = req.params.placaCarro;
    try {
        const cliente = await Cliente.findOne({ placaCarro: placaCarro });

        if(!cliente) {
            res.status(422).json({ message: "Placa não encontrada..." });
            return;
        }

        res.status(200).json(cliente);
        
    } catch(error) {
        res.status(500).json({ erro: error });
    }
})

// PUT - atualiza os dados de um cliente pelo id
router.put("cliente/:id", async (req, res) => {
    const id = req.params._id;

    const { nome, telefone, cpf, placaCarro } = req.body;

    const cliente = {
        nome,
        telefone,
        cpf,
        placaCarro
    }

    try {
        const cliente = await Cliente.updateOne({ _id: id });
        
        if(cliente.matchedCount === 0) {
            res.status(422).json({ message: "Cliente não encontrado..." });
            return;
        }

        res.status(200).json(cliente)
    } catch(error) {
        res.status(500).json({ erro: error });
    }
})

// DELETE - deleta um cliente pelo id
router.delete("/cliente/:id", async (req, res) => {
    const id = req.params._id;
    const cliente = await Cliente.findOne({ _id: id });
        
    if(!cliente) {
        res.status(422).json({ message: "Cliente não encontrado..." });
        return;
    }
    
    try {
        await deleteOne({ _id: id })
        res.status(200).json({ message: "Cliente deletado!" });
    } catch(error) {
        res.status(500).json({ erro: error });
    }
})

module.exports = router;