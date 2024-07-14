const mongoose = require('mongoose')

const Schema = mongoose.Schema

let wishListSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    productId: String,
})
const wishList = mongoose.model('wishlist', wishListSchema)
module.exports = wishList