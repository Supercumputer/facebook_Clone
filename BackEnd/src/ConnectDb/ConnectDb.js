const mongoose = require('mongoose');

async function connectDb(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/facebooks');
        console.log('Successful connection !!!')
    } catch (error) {
        console.log('Connection failed !!!')
    }
}

module.exports = connectDb