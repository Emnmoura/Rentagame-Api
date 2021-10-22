const { Schema, model } = require('mongoose');
const { prependOnceListener } = require('./Game');

const locationSchema = new Schema(
    {
        userId: { type: String, unique: true, required: true },
        jogoId: { type: String, unique: true, required: true },
        finalizado: { type: String, unique: true, required: true },
        clientId: {type: Schema.Types.ObjectId, ref: 'Client'},
        dateLocation: Number, //data que foi locada
        numberDays: Number, //dias de de locação
        fineDays: Number,  // Valor por dia       
    },
    {
        timestamps: true,
    },
);

module.exports = model('Location', locationSchema);