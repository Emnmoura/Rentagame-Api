const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        title: String,
        genero: { type: String, require: true, unique: true },
        descricao: { type: String, require: true, unique: true },
        preco: Number,
        quantidade: Number,
        game: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
    },

    {
        timestamps: true
    },
);
module.exports = model('Game', gameSchema);