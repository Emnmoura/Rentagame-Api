const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
    {
    nome: { type: String},
    endereco: { type: String},
    telefone: { type: String},
    cpf: { type: Number},
    },

    {
        timestamps: true,
    },
);


module.exports = model('Client', clientSchema);


