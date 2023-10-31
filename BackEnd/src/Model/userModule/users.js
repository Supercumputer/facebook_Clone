const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: { 
        type: String,
        require: true,
        min: 3,
        max: 20,
   
    },
    lastName: { 
        type: String,
        require: true,
        min: 3,
        max: 20,
    },
    email: { 
        type: String,
        require: true,
        max: 50,
       
    },
    passWord: { 
        type: String, 
        require: true,
        min: 8
    },
    avataPicture: {
        type: String,
        default: ''
    },
    bgPicture: {
        type: String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    },
    folloWings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: { 
        type: String,
        default: ''
    },
    date: { 
        type : String,
        require: true,
    },
    gioiTinh: { 
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('user', User);
