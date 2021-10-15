const { Router } = require('express');
const Game = require('../models/Game');
const router = Router();

router.post('/games', async (request, response) => {
    const {
        title,
        genero,
        descricao,
        preco,
        quantidade,
    } = request.body

    try {
        const newGame = await Game.create({
            title,
            genero,
            descricao,
            preco,
            quantidade,
        });
        response.status(201).json(newGame);

    } catch (error) {
        response.status(500).json({ msg: 'Erro ao tentar criar o jogo', error });
    }
});

module.exports = router;