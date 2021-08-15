var mongoose = require('mongoose');
var userObject = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Email: { type: String, required: true ,  unique: true, },
    Password: { type: String, required: true },

});
module.exports = mongoose.model('RegisterCollection', userObject)