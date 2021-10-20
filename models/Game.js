const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        titulo: {type: String},
        genero: {type: String},
        descricao: {type: String},
        preco:{ type: Number},
        quantidade:{ type: Number},       
    },

    {
        timestamps: true,
    },
);
module.exports = model('Game', gameSchema);