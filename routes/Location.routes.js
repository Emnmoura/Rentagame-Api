const { Router } = require("express");
const Location = require('../models/Location');
const router = Router();

//criar locaçao
router.post('/', async (req, res) =>{
    const { id } = req.user;
    try{
        const location = await Location.create({... req.body});
        res.status(201).json(location);

    } catch(error){
        res.status(500).json({message: 'Erro ao criar a locação', error})
    }
})

//ver locaçoes

router.get('/all', async (req, res) =>{
    try{
        const locations = await Location.find();
        res.status(200).json(locations)
    } catch(error){
        res.status(500).json({ message: 'Erro ao tentar buscar todas locações', error});
    }
})

module.exports = router;