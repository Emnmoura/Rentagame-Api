const { Schema, model } = require('mongoose');
const { prependOnceListener } = require('./Game');

const locationSchema = new Schema(
    {
        userId: { type: String, required: true },
        jogoId: { type: Schema.Types.ObjectId, ref: 'Game' },        
        clientId: {type: Schema.Types.ObjectId, ref: 'Client'},
        dateLocation: {type: String},
        
    },
    {
        timestamps: true,
    },
);

module.exports = model('Location', locationSchema);