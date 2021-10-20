const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');


const uploadImage = require('../middlewares/cloudinary.middleware');

const router = Router();

//upload de papel parede
router.post('/uploadwallpaper',uploadImage.single('image'), (req, res) => {res.json({msg: "Upload OK!"})
})


  
module.exports = router;