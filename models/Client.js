const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
    {
    nome: { type: String},
    endereço: { type: String},
    telefone: { type: Number},
    cpf: { type: Number},
    },

    {
        timestamps: true,
    },
);


module.exports = model('Client', clientSchema);


