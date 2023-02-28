var mongoose = require('mongoose');

var CartoonSchema = new mongoose.Schema({
    name: String,
    seasons: Number,
    period: String,
    rating: String
},
{
collection: 'Cartoons'
});

module.exports = mongoose.model('CartoonShow', CartoonSchema);