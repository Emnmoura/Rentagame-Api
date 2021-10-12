const { Schema, model } = require('mogoose');
const { prependOnceListener } = require('./Game');

const locationSchema = new Schema(
    {

        userId: { type: String, unique: true, required: true },
        jogoId: { type: String, unique: true, required: true },
        finalizado: { type: String, unique: true, required: true },
        dateLocation: Number,
        numberDays: Number,
        fineDays: Number,
        finalValue: Number,
    },
    {
        timestamps: true,
    },
);
module.exports = model(locationSchema);