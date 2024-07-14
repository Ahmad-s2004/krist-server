const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'},
    addressId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'address'
    },
    cardId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'cards'
    },
    productId:String,
    title:String,
    quantity:String,
    size:String
     

})
const order = mongoose.model("order", orderSchema)
module.exports = order