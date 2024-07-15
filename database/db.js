const mongoose = require('mongoose')


const db = () =>{
    try {
        mongoose.connect('mongodb+srv://ahmadamman:6jritwx@cluster0.gmwbecz.mongodb.net/krist')
        console.log('Database connected')
    } catch (error) {
        console.log('Database not connected', error)
    }
} 
module.exports = db
