const mongoose = require('mongoose')

let Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: String,
    password: {
        type: String,
        required: true
    },
    address: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address'
        }
    ],
    card: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cards'
        }
    ]
}, { timestamps: true });

let user = mongoose.model("user", userSchema)
module.exports = user 