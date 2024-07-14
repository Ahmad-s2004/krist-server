const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    img1: { type: String, required: true },
    img2: { type: String, required: true }
});

const kidsProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: [String],
        default: []
    },
    size: {
        type: [String],
        default: []
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    saleStatus: {
        type: Boolean,
        default: false
    },
    salePercent: {
        type: Number,
        default: 0
    },
    gallery: [imageSchema]
});


const kids = mongoose.model('kids', kidsProductSchema);
module.exports = kids

