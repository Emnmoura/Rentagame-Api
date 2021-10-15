const { Router } = require("express");
const Location = require('../models/Location');
const router = Router();

//criar locaçao
/*router.post('/', async (req, res) =>{
    const { id } = req.user;
    try{
        const location = await Location.create({... req.body})

    } catch(error){

    }
})*/

module.exports = router;