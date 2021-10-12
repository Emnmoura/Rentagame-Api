const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        title: String,
        genero: {type: String},
        descricao: {type: String},
        preco: Number,
        quantidade: Number,       
    },

    {
        timestamps: true,
    },
);
module.exports = model('Game', gameSchema);