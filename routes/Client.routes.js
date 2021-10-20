const { Router } = require("express");
const Client = require('../models/Client');
const router = Router();

//criar cliente
router.post('/', async (req, res) =>{
    console.log(req.body)
    const { 
        nome,
        endereco,
        telefone,
        cpf
     } = req.body;
    try{
        const newClient = await Client.create({
            nome,
        endereco,
        telefone,
        cpf
        });
        res.status(201).json(newClient);

    } catch(error){
        console.log(error)
        res.status(500).json({message: 'Erro ao criar cliente', error})
    }
})

//ver todos os clientes

router.get('/all', async (req, res) =>{
    try{
        const clients = await Client.find();
        res.status(200).json(clients)
    } catch(error){
        res.status(500).json({ message: 'Erro ao tentar buscar todos clientes', error});
    }
})

//ver um cliente

router.get('/:clientId', async ( req, res) => {
    const {clientId} = req.params;
    try {
        const client = await Client.findById(clientId);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'cliente nao encontrado', error});
    }
})

//editar cliente

router.put('/:clientId', async (req, res) => {
    const {clientId} = req.params;
    try {
        const client = await Client.findByIdAndUpdate(clientId, req.body, {new: true});
        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({message: 'Erro ao editar cliente', error});
        
    }
})

//deletar cliente

router.delete('/:clientId', async (req, res) => {
    const {clientId} = req.params;
    try {
        const client = await Client.findByIdAndDelete(clientId, req.body, {new: true});
        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({message: 'Erro ao excluir cliente', error});
        
    }
})

module.exports = router;