const mongoose = require('mongoose')
const Schema = mongoose.Schema

let addressSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'},
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    addresses:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    postal:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
})
const address = mongoose.model("address", addressSchema)
module.exports = address