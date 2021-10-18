const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/Users');


const uploadImage = require('../config/cloudinary.config');

const router = Router();

//signup 
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            throw new Error('Missing username or password')
        }
        const user = await User.findOne({ username });
        if (!!user) {
            throw new Error('Username already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);
        await User.create({
            username,
            passwordHash
        })
        res.status(201).json({ message: `Created user: ${username}` });
    } catch (error) {
        res.status(500).json({ message: 'Error trying to create user', error: error.message });

    }
})

//upload de papel parede
router.post('/user/uploadwallpaper',uploadImage.single('image'), (req, res) => {

})

module.exports = router;