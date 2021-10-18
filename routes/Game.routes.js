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

router.get('/', async (request, res) => {
    try {
        const games = await game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ msg: 'Server com Erro', error });
    }
});

router.get('/:id', async (request, res) => {
    const { id } = request.params;
    try {
        const game = await Game.findById(id);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ msg: 'Erro game not found', error });
    }
});

router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const payload = request.body;
    try {
        const updatedGame = await Game.findOneAndUpdate({ _id: id }, payload, { new: true });
        response.status(200).json(updatedGame);
    } catch (error) {
        response.status(500).json({ msg: 'Game update error', error });
    }
});

router.delete('/:id', async (request, res) => {
    const { id } = request.params;
    try {
        await Game.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting game', error });
    }
});

module.exports = router;