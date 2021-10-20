const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');


const uploadImage = require('../middlewares/cloudinary.middleware');

const router = Router();

//upload de papel parede
router.post('/user/uploadwallpaper',uploadImage.single('image'), (req, res) => {
console.log(req.file)
//res.json({msg: "teste"})
})


  
module.exports = router;