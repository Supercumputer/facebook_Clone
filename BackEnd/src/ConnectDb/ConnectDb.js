const mongoose = require('mongoose');

async function connectDb(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/facebooks');
        console.log('Kết nối thành công !!!')
    } catch (error) {
        console.log('Kết nối thất bại !!!')
    }
}

module.exports = connectDb