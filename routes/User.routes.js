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

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      if (!username || !password) {
        throw new Error("Missing username or password");
      }
  
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("Wrong username or password");
      }
  
      const validation = bcrypt.compareSync(password, user.passwordHash);
  
      if (!validation) {
        throw new Error("Wrong username or password");
      }
  
      const payload = {
        id: user._id,
        username: user.username,
      };
      const token = jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "1day",
      });
      res.status(200).json({ user: payload, token });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error trying to login", error: error.message });
    }
  });
  
module.exports = router;