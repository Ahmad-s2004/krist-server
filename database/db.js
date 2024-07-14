const mongoose = require('mongoose')


const db = () =>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/krist')
        console.log('Database connected')
    } catch (error) {
        console.log('Database not connected', error)
    }
} 
module.exports = db