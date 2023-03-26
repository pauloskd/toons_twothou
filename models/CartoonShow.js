var mongoose = require('mongoose');

var CartoonSchema = new mongoose.Schema({
    name: String,
    description: String,
    coverImage: String,
    seasons: Number,
    period: String,
    rating: Number
},
{
collection: 'Cartoons'
});

module.exports = mongoose.model('CartoonShow', CartoonSchema);