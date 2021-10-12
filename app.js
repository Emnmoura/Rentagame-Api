require('dotenv').config();

const express = require('express');

const cors = require('cors');
const { response } = require('express');
//
const Game = require('./models/Game');
//


require('./config/db.config')
const app = express();
app.use(express.json());
app.use(cors());
//
app.post('/games', async (request, response) => {
const newGame = await Game.create({
    title: 'Super Mario',
    genero: 'Acao',
    descricao: 'Jogodoencanador',
    preco: 100,
    quantidade: 1,
    
})
console.log(newGame);
});
//
app.listen(process.env.PORT, () => console.log(`Server listen UP Port ${process.env.PORT}`));