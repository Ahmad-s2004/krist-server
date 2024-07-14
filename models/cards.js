const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let cardsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    cardNumber: {
        type: String,
        requried: true
    },
    expire: {
        type: String,
        requried: true
    },
    cvv: {
        type: String,
        requried: true
    }
});
const card = mongoose.model('card', cardsSchema)
module.exports = card