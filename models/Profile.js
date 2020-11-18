const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    //setting up profile data
    firstName: { type: String, trim: true, default: '' },
    lastName: { type: String, trim: true, default: '' },
    age: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    weight: { type: Number, default: 0 }
})

module.exports = mongoose.model('Profile', Profile)