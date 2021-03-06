const { Router } = require("express");
const Location = require('../models/Location');
const router = Router();

//criar locaçao

router.post('/new', async (req, res) =>{
    const { id } = req.user;
    console.log(req.body)
    const { 
        jogoId,
        clientId,
        dateLocation,
       
     } = req.body;
    try{
        const newLocation = await Location.create({
            jogoId,
        clientId,
        dateLocation,
        userId:id,        
        });
        res.status(201).json(newLocation);

    } catch(error){
        console.log(error)
        res.status(500).json({message: 'Erro ao criar locação', error})
    }
})
/*router.post('/', async (req, res) =>{
    const { id } = req.user;
    try{
        const location = await Location.create({... req.body});
        res.status(201).json(location);

    } catch(error){
        res.status(500).json({message: 'Erro ao criar a locação', error})
    }
})*/

//ver locaçoes

router.get('/all', async (req, res) =>{
    try{
        const locations = await Location.find().populate("jogoId clientId")
        res.status(200).json(locations)
    } catch(error){
        res.status(500).json({ message: 'Erro ao tentar buscar todas locações', error});
    }
})

//ver uma locação

router.get('/:locationId', async ( req, res) => {
    const {locationId} = req.params;
    try {
        const location = await Location.findById(locationId);
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Locação nao encontrada', error});
    }
})

//editar locação

router.put('/:locationId', async (req, res) => {
    const {locationId} = req.params;
    try {
        const location = await Location.findByIdAndUpdate(locationId, req.body, {new: true});
        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({message: 'Erro ao editar a locação', error});
        
    }
})

module.exports = router;
