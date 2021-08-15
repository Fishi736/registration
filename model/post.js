var mongoose = require('mongoose');
var postObject = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    url: { type: String },

});
module.exports = mongoose.model('PostCollection', postObject)